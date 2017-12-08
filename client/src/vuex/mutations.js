
const mutations = {
  updatePhotos (state, payload) {
    state.photos = payload
  },
  setToken (state, payload) {
    console.log('masuk setToken')
    state.userToken = payload
    localStorage.setItem('userToken', payload)
  },
  setUsername (state, payload) {
    console.log('masuk setUsername')
    state.username = payload
  },
  removeToken (state) {
    state.userToken = null
    state.username = null
  }
}

export default mutations
