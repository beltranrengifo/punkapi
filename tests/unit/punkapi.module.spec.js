import punkapi from '@/store/modules/punkapi'

const {
  mutations: { SET_BEERS, SET_RANDOM, SET_ERROR },
  actions: { fetchBeers, fetchRandom },
  getters: { getBeers, getError } } = punkapi

describe('Punkapi actions', () => {
  test('fetchBeers should call mutation', async () => {
    const store = { commit: jest.fn() }
    await fetchBeers(store, {
      page: 1,
      per_page: 20,
    })
    expect(store.commit).toHaveBeenCalled()
  })
})


describe('Punkapi mutations', () => {
  test('SET_BEERS should commit to state', () => {
    const state = { beers: [] }
    SET_BEERS(state, {data: [{id: 1}]} )
    expect(state.beers.length).toBe(1)
  })

  test('SET_BEERS should concat if loadMore', () => {
    const state = { beers: [{id: 1}] }
    SET_BEERS(state, {data: [{id: 2}], loadMore: true} )
    expect(state.beers.length).toBe(2)
  })

  test('SET_RANDOM should commit to state', () => {
    const state = { random: null }
    SET_RANDOM(state, {id: 1} )
    expect(Object.keys(state.random)[0]).toBe('id')
  })

  test('SET_ERROR should commit to state', () => {
    const state = { error: false }
    SET_ERROR(state, new Error() )
    expect(state.error instanceof Error).toBe(true)
  })
})

describe('Punkapi getters', () => {
  test('getBeers should return beers', () => {
    const state = { beers: [{id: 1}, {id: 2}, {id: 3}] }
    const beers = getBeers(state)
    expect(beers.length).toBe(3)
  })

  test('getError should return the error', () => {
    const state = { error: new Error('Hi error!') }
    const error = getError(state)
    expect(error instanceof Error).toBe(true)
  })
})
