'use client';

import { isEmpty } from "lodash";

import useActions from "./use-actions";
import { useFormFieldValue } from "./utils";

export default function useVisibility({ autohide, actions, type }) {
  const autohidden = useAutohide(autohide)
  const action = useActions(actions)

  if (autohide) {
    if (autohidden) {
      return false
    }
  }

  if (type === 'show') {
    return !!action
  }

  if (type === 'hide') {
    return !action
  }

  console.error('Unrecognized visibility type');
  return true
}

function useAutohide(autohide) {
  const { defaultValue } = useFormFieldValue()

  if (autohide) {
    switch (typeof defaultValue) {
      case 'string':
        return !isEmpty(defaultValue)
      case 'number':
        return defaultValue > 0
      case 'boolean':
        return defaultValue
    }
  }

  return false
}
