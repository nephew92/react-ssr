import { AsyncLocalStorage } from 'node:async_hooks'

class Store {
  get(key) {
    return this[key]
  }

  set(key, value) {
    this[key] = value
    return this
  }
}

export default new class Context {
  /**
   * @type {AsyncLocalStorage<Store>}
   */
  #als = new AsyncLocalStorage();

  getContext() {
    return this.#als.getStore();
  }

  get(key) {
    const store = this.#als.getStore();
    return store.get(key)
  }

  set(key, value) {
    const store = this.#als.getStore();
    return store.set(key, value)
  }

  /**
   * @template T
   * @param {(store: Store)=>T} callback
   * @returns {T}
   */
  provider(callback) {
    const store = new Store()
    return this.#als.run(store, callback, store);
  }
}
