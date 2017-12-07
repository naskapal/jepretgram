import axios from 'axios'

const baseURL = 'http://localhost:3000'

const actions = {
  getPhotos ({commit}) {
    axios.get(baseURL + '/photos')
      .then(({data}) => commit('updatePhotos', data))
      .catch(error => console.log(error))
  },
  uploadPhoto ({commit, state}) {
    let data = new FormData()
    data.append('photo', state.photo, state.photo.name)
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post(baseURL + '/photos', {caption: state.caption, photo: data}, config)
  }
}

export default actions
