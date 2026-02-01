const { xxh64 } = require('@node-rs/xxhash')

module.exports = {
  getChecksum (buffer) {
    return xxh64(buffer)
  }
}
