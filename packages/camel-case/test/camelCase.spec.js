const { camelCase } = require('../')

const INITIAL_VALUE = 'one small sweet of chocolate'
const POST_FUNCTION_VALUE = 'oneSmallSweetOfChocolate'

describe('> Declare the string to be transformed', () => {
  const obj = {
    camelCase,
  }
  it(`obj should be typeof object and obj.camelCase should be typeof function`, () => {
    expect(typeof obj).toBe('object')
    expect(typeof obj.camelCase).toBe('function')
  })

  it(`should receive "${INITIAL_VALUE}" in method`, () => {
    expect(INITIAL_VALUE).toBeDefined()
  })

  // const camelCaseFunctionWatcher = spyOn(obj, 'camelCase')
  const result = obj.camelCase(INITIAL_VALUE)

  // it(`camelCase() should have been called`, () => {
  //   expect(camelCaseFunctionWatcher).toHaveBeenCalled()
  // })

  it(`should run "camelCase()" and return "${POST_FUNCTION_VALUE}"`, () => {
    expect(result).toBe(POST_FUNCTION_VALUE)
  })
})
