'use strict'

/**
 * Dependencies
 */

const assert = require('assert')
const struct = require('./index')

/**
 * Assertions
 */

describe("struct", () => {
  it("should have tests", () => {
    assert.ok(true)
  })

  it("should have validator boolean_or_null", () => {
    let strong_param = struct({is_admin: 'boolean_or_null?'})
    assert.ok(true)
  })

  it("should have validator string_or_boolean_or_null", () => {
    let strong_param = struct({has_role: 'string_or_boolean_or_null?'})
    assert.ok(true)
  })

  it("should have validator string_or_number_or_null", () => {
    let strong_param = struct({has_role: 'string_or_number_or_null?'})
    assert.ok(true)
  })

  it("should have validator string_or_null", () => {
    let strong_param = struct({name: 'string_or_null?'})
    assert.ok(true)
  })

  it("should have validator number_or_null", () => {
    let strong_param = struct({price: 'number_or_null?'})
    assert.ok(true)
  })

  it("should have validator date_or_string_or_null", () => {
    let strong_param = struct({created_at: 'date_or_string_or_null?'})
    assert.ok(true)
  })

  it("should have validator array_or_null", () => {
    let strong_param = struct({permissions: 'array_or_null?'})
    assert.ok(true)
  })

  it("should have validator object_or_null", () => {
    let strong_param = struct({location: 'object_or_null?'})
    assert.ok(true)
  })

  it("should have validator array_or_object_or_null", () => {
    let strong_param = struct({placement: 'array_or_object_or_null?'})
    assert.ok(true)
  })

  it("should have validator date_or_null", () => {
    let strong_param = struct({delivered_at: 'date_or_null?'})
    assert.ok(true)
  })
})
