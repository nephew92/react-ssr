import NodeCache from "node-cache";

export default class Cache {
  constructor(ttlSeconds) {
    this.cache = new NodeCache({ stdTTL: ttlSeconds, checkperiod: ttlSeconds * 0.2, useClones: false });
  }

  /**
   * @template T
   * @param {string} key
   * @param {()=>T} storeFunction
   * @returns {T}
   */
  async get(key, storeFunction) {
    const value = this.cache.get(key);
    if (value) {
      return value
    }

    const result = await storeFunction();
    this.cache.set(key, result);
    return result;
  }

  del(keys) {
    return this.cache.del(keys);
  }

  flush() {
    this.cache.flushAll();
  }
}
