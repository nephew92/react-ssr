'use client';

import { useController } from "react-hook-form";

import { useDynamicContext } from "./context";

export function useFormFieldValue() {
  const { name } = useDynamicContext()
  const { field: { value }, formState: { defaultValues: { [name]: defaultValue } } } = useController({ name })
  return { defaultValue, value }
}

export const conditions = {
  or(fn) {
    return this.some(fn)
  },
  and(fn) {
    return !!this.length && this.every(fn)
  },
  none(fn) {
    return !conditions.or.call(this, fn)
  },
}

export const formatType = function (value, type, equality) {
  if (['missing', 'not-missing'].includes(equality)) {
    return value
  }

  switch (type) {
    case "integer":
      return parseInt(value)
    case "input":
      return `${value}`
    case "boolean":
      return typeof value === "boolean" ? value : { false: false, true: true }[value]
    case 'date':
      return new Date(value)
    /* case "time":
      return moment(value + "+00:00", 'HH:mmZ').tz(this.timezone).set({
        'year': 2012,
        'month': 11,
        'date': 8,
      }) */
    case "weekday":
      return parseInt(value)
    default:
      return value
  }
}

export const equalityTests = {
  missing: (a, b) => a === null || a === undefined || a === '',
  'not-missing': (a, b) => !equalityTests['missing'](a, b),
  included: function (a, b) {
    return `${b}`.toLowerCase().split(',').includes(`${a}`.toLowerCase())
  },
  excluded: function (a, b) {
    return !`${b}`.toLowerCase().split(',').includes(`${a}`.toLowerCase())
  },
  gt: function (a, b) {
    return a > b
  },
  lt: function (a, b) {
    return a < b
  },
  ge: function (a, b) {
    return a >= b
  },
  le: function (a, b) {
    return a <= b
  },
  equal: function (a, b) {
    return a === b
  },
  'not-equal': function (a, b) {
    return a !== b
  },
  contains: function (a, b) {
    return new RegExp(`.*${escapeRegex(b)}.*`).test(a)
  },
  'start-with': function (a, b) {
    return new RegExp(`^${escapeRegex(b)}`).test(a)
  },
  'end-with': function (a, b) {
    return new RegExp(`${escapeRegex(b)}$`).test(a)
  },
}

const escapeRegex = str => `${str}`.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
