import { capitalize, truncate } from '@/utils/filters'
import http from '@/utils/http'

describe('Capitalize filter', () => {
  test('capitalize should be a function', () => {
    expect(typeof capitalize).toBe('function')
  })

  test('capitalize should return empty string if no value', () => {
    const val = capitalize()
    expect(val).toBe('')
  })

  test('capitalize should capitalize', () => {
    const val = capitalize('punkapi')
    expect(val).toBe('Punkapi')
  })
})

describe('Axios instance', () => {
  test('http should be a function', () => {
    expect(typeof http).toBe('function')
  })

  test('http should have defaults', () => {
    const httpInstance = http()
    expect(httpInstance.defaults.baseURL).toBe('https://api.punkapi.com/v2')
  })
})

describe('Truncate filter', () => {
  test('truncate should be a function', () => {
    expect(typeof truncate).toBe('function')
  })

  test('truncate should return the same string if length is < than limit', () => {
    const val = truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1000)
    expect(val).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
  })

  test('truncate should return a string with clamp if length is > than limit', () => {
    const val = truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 40)
    expect(val).toContain('...')
  })

  test('truncate should return a string with custom clamp', () => {
    const val = truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 40, '[...]')
    expect(val).toContain('[...]')
  })
})
