/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { merge } from "lodash";

import { cmsApi } from "@/client/utils/httpclient";

function hookBaseFactory(apiClient = cmsApi) {
  return () => {
    const [loading, setLoading] = useState(false)

    const fetch = useCallback(async ({ method = "get", url = "", ...payload }) => {
      setLoading(true)
      const { data } = await apiClient.request({
        method,
        url,
        ...payload,
      }).finally(() => {
        setLoading(false)
      })

      return data
    }, [])

    return useMemo(() => ({
      loading, fetch,
    }), [loading, fetch])
  }
}

/**
 * @template TStore
 */
class StoreFactory {
  /**
   * @type {function():TStore}
   */
  useStoreFactory() { }

  /**
   * @template TExtendingStore
   * @param {function(TStore): TExtendingStore} useExtendedStore
   * @return {StoreFactory<TStore&TExtendingStore>}
   */
  extend(useExtendedStore) {
    return new class extends this.constructor {
      useStoreFactory() {
        const store = super.useStoreFactory()
        const extended = useExtendedStore(store)

        return useMemo(() => merge({}, store, extended), [store, extended])
      }
    }
  }

  factory() {
    /**
     * @type {TStore}
     */
    const context = {}
    const Context = createContext(context)
    const useStore = () => useContext(Context)

    const Provider = ({ children }) => {
      const store = this.useStoreFactory()

      return <Context.Provider value={store}>
        {children}
      </Context.Provider>
    }

    return {
      useStore,
      Provider,
    }
  }
}

/**
 * @template BaseStore
 * @param {function(): BaseStore} useBaseStore
 * @return {StoreFactory<BaseStore>}
 */
export function createFactory(useBaseStore) {
  return new class extends StoreFactory {
    useStoreFactory() {
      return useBaseStore()
    }
  }
}

export default apiClient => createFactory(hookBaseFactory(apiClient))
