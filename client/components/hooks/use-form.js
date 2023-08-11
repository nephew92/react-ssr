import { useMemo } from "react";

import createStore from "./factory";

const { Provider, useStore } = createStore()
  .extend(({ fetch, loading }) => useMemo(() => ({
  }), []))
  .factory()

export {
  Provider as FormProvider,
  useStore as useFormStore,
}
