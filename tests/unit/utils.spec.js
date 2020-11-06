import { capitalize } from '@/utils/filters'
import http from '@/utils/http'

describe('capitalize', () => {
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
