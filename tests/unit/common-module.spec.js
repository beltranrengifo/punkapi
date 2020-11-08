import common from '@/store/modules/common'

const {
  mutations: { SET_MODAL_CONTENT },
  actions: { setModalContent },
  getters: { getModalContent } } = common

describe('Common actions', () => {
  test('setModalContent should call mutation', () => {
    const store = { commit: jest.fn() }
    setModalContent(store, 'payload')
    expect(store.commit).toHaveBeenCalledWith(
      'SET_MODAL_CONTENT',
      'payload'
    )
  })
})

describe('Common mutations', () => {
  test('SET_MODAL_CONTENT should commit to state', () => {
    const state = { modalContent: null }
    SET_MODAL_CONTENT(state, { id: 1 } )
    expect(JSON.stringify(state.modalContent)).toBe(JSON.stringify({ id: 1 }))
  })
})

describe('Common getters', () => {
  test('getModalContent should return modal content', () => {
    const state = { modalContent: { id: 1 } }
    const a = getModalContent(state)
    expect(JSON.stringify(a)).toBe(JSON.stringify({ id: 1 }))
  })
})
