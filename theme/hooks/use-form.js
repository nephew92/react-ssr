import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import createStore from "./factory";

const { Provider, useStore } = createStore()
  .extend(({ fetch, loading }) => {
    const [data, setData] = useState(null)
    const [definition, setDefinition] = useState([])

    const load = useCallback(async () => {
      const { consumer, definition } = await fetch({
        method: 'GET',
        url: '/form/load',
      })

      setData(consumer)
      setDefinition(definition)
      return consumer
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
      definition,
      handleSubmit: () => context.handleSubmit(save),
    }), [context, save, data, definition])
  })
  .factory()

export {
  Provider as FormProvider,
  useStore as useFormStore,
}
