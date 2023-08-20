'use client';

import { useEffect, useState, useCallback } from "react";
import { useWatch, useFormContext } from "react-hook-form";

import { conditions, equalityTests, formatType } from "./utils";

export default function useActions(actions) {
  const [action, setAction] = useState(null)
  const { handler, listening } = useActionsTester(actions)

  const values = useWatch({ name: listening }).join(',')

  useEffect(() => {
    const action = handler()
    setAction(action || null)
  }, [values, handler])

  return action
}

function useActionsTester(actions) {
  const listening = useListening(actions)
  const tester = useTester()

  const handler = useCallback(() => actions.find(({ rules }) => tester(rules)), [actions, tester])

  return { handler, listening }
}

function useListening(actions) {
  const [listening, setListening] = useState([])

  useEffect(() => {
    const listening = []
    for (const { rules: { groups } } of actions) {
      for (const { rules } of groups) {
        for (const { key } of rules) {
          listening.push(key)
        }
      }
    }
    setListening(listening)
  }, [actions])

  return listening
}

const useTester = () => {
  const { watch } = useFormContext()

  const testRule = useCallback(item => {
    const { key, value, type } = item
    let { equality } = item

    if (key === undefined || value === undefined) {
      return false
    }

    const left = formatType(watch(key), type, equality)
    if (left === undefined) return false

    const right = formatType(value, type)
    equality = equality || 'equal'

    return equalityTests[equality](left, right)
  }, [watch])

  const testGroups = useCallback((group, condition, testItem) => {
    condition = conditions[condition]
    if (condition === conditions.none) {
      // watch.fields = null
    }
    return condition.call(group, testItem)
  }, [])

  const testRules = useCallback(rules => {
    if (!rules) {
      return false
    } else {
      return testGroups(rules.groups, rules.condition,
        group => testGroups(group.rules, group.condition,
          item => testRule(item)))
    }
  }, [testRule, testGroups])

  return testRules
}
