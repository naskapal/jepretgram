import axios from 'axios'
import jwt from 'jsonwebtoken'

const baseURL = 'http://localhost:3000'

let body = {}
// let headers = {}

const actions = {
  getPhotos ({commit}) {
    axios.get(baseURL + '/photos')
      .then(({data}) => commit('updatePhotos', data))
      .catch(error => console.log(error))
  },
  uploadPhoto ({commit}, payload) {
    let data = new FormData()
    data.append('photo', payload.photo, payload.photo.name)
    data.append('caption', payload.caption)
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    console.log(data)
    // console.log(payload.photo.name)
    axios.post(baseURL + '/photos', data, config)
  },
  register ({commit}, payload) {
    body = {
      username: payload.username,
      password: payload.password
    }
    axios.post(baseURL + '/users/register', body)
      .then(success => console.log(success))
      .catch(err => console.log(err))
  },
  login ({commit}, payload) {
    body = {
      username: payload.username,
      password: payload.password
    }
    axios.post(baseURL + '/users/login', body)
      .then(({data}) => commit('setToken', data.token))
      .catch(error => console.log(error))
  },
  decodeToken ({commit, state}) {
    let token = localStorage.getItem('userToken')
    commit('setUsername', jwt.decode(token))
  },
  logout ({commit}) {
    localStorage.removeItem('userToken')
    commit('removeToken')
  }
}

export default actions
