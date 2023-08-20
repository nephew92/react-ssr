'use client';

import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";

import createStore from "../factory";

const { Provider, useStore } = createStore()
  .extend(({ fetch, loading }) => {
    const save = useCallback(async data => {
      await fetch({
        method: 'POST',
        url: '/form/submit',
        data,
      })
    }, [fetch])

    const context = useForm()

    return useMemo(() => ({
      context,
      handleSubmit: context.handleSubmit(save),
    }), [context, save])
  })
  .factory()

export {
  Provider as FormStoreProvider,
  useStore as useFormStore,
}
