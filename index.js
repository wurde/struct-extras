'use strict'

/**
 * Dependencies
 */

const superstruct = require('superstruct')

/**
 * Define struct
 */

const struct = superstruct.superstruct({
  types: {
    boolean_or_null: (value) => {
      if (value === null || value === undefined || value.constructor === Boolean) {
        return true
      } else {
        return false
      }
    },
    string_or_boolean_or_null: (value) => {
      if (value === null || value === undefined || value.constructor === Boolean || value.constructor === String) {
        return true
      } else {
        return false
      }
    },
    string_or_number_or_null: (value) => {
      if (value === null || value === undefined || value.constructor === String || value.constructor === Number) {
        return true
      } else {
        return false
      }
    },
    string_or_null: (value) => {
      if (value === null || value === undefined || value.constructor === String) {
        return true
      } else {
        return false
      }
    },
    number_or_null: (value) => {
      if (value === null || value === undefined || value.constructor === Number) {
        return true
      } else {
        return false
      }
    },
    date_or_string_or_null: (value) => {
      if (value === null || value === undefined || value.constructor === Date || value.constructor === String) {
        return true
      } else {
        return false
      }
    },
    array_or_null: (value) => {
      if (value === null || value === undefined || value.constructor === Array) {
        return true
      } else {
        return false
      }
    },
    object_or_null: (value) => {
      if (value === null || value === undefined || value.constructor === Object) {
        return true
      } else {
        return false
      }
    },
    array_or_object_or_null: (value) => {
      if (value === null || value === undefined || value.constructor === Array || value.constructor === Object) {
        return true
      } else {
        return false
      }
    },
    date_or_null: (value) => {
      if (value === null || value === undefined || value.constructor === Date) {
        return true
      } else {
        return false
      }
    }
  }
})

/**
 * Export struct
 */

module.exports = struct
