import axios from 'axios'

const baseURL = 'http://localhost:3000'

const actions = {
  getPhotos ({commit}) {
    axios.get(baseURL + '/photos')
      .then(({data}) => commit('updatePhotos', data))
      .catch(error => console.log(error))
  }
  getPhoto ({commit}, path) {
    
  }
}

export default actions
