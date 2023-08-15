import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import createStore from "./factory";

const { Provider, useStore } = createStore()
  .extend(({ fetch, loading }) => {
    const [data, setData] = useState(null)

    const load = useCallback(async () => {
      const data = await fetch({
        method: 'GET',
        url: '/form/load',
      })

      setData(data)
      return data
    }, [fetch])

    const save = useCallback(async data => {
      await fetch({
        method: 'POST',
        url: '/form/submit',
        data,
      })
    }, [fetch])

    const context = useForm({
      defaultValues: load,
    })

    return useMemo(() => ({
      context,
      data,
      handleSubmit: () => context.handleSubmit(save),
    }), [context, save, data])
  })
  .factory()

export {
  Provider as FormProvider,
  useStore as useFormStore,
}
