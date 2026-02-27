// Cache
const cache = new Map();
module.exports = { get: k => cache.get(k), set: (k, v) => cache.set(k, v) }