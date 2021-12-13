import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // state defining success and error
    success: "",
    error: "",
    Images: []

  },

  getters: {
    //    show success and show error

    showSuccess(state) {
      return state.success
    },
    showError(state) {
      return state.error
    }
  },

  mutations: {
    // responses coming from actions
    LOGGED_IN: (state, success) => state.success = success,
    ERROR: (state, error) => state.error = error,
    SET_IMAGES: (state, images) => state.images = images

  },

  actions: {

    // For signup data
    signup({
      commit
    }, payload) {
      console.log(commit)

      axios.post('http://image-hosting-sharing-service.herokuapp.com/api/register', {
          ...payload,
          returnSecureToken: true,
          headers: {

            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'text/html; charset=utf-8'

          }
        })
        .then(response => {
          console.log(response.data.data)
          console.log(response.data.data.message)
        })
        .catch(error => console.log(error))

    },

    // For login data
    login({
      commit
    }, payload) {

      axios.post('http://image-hosting-sharing-service.herokuapp.com/api/login', {
          ...payload,
          returnSecureToken: true,
          headers: {

            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'text/html; charset=utf-8',

          }
        })

        .then(response => {
          commit('LOGGED_IN', response.data.data.message)
          console.log(response.data.data.user)
          localStorage.setItem("users", JSON.stringify(response.data.data.user))
          localStorage.setItem("Token", JSON.stringify(response.data.data.token))

        })
        .catch(error => {
          commit('ERROR', error.response.data.message),
            console.log(error.response.data.message)

        })
    },

    // For logout

    logout({
      commit
    }) {

      console.log(commit)

      var get_token = JSON.parse(localStorage.getItem("Token"))
      let customAxios = axios.create({
        headers: {

          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + get_token,

        }
      })
      customAxios.post("http://image-hosting-sharing-service.herokuapp.com/api/logout")
        .then(response => {
          console.log(response.data.data)
          localStorage.removeItem("Token")
          localStorage.removeItem('users')

        })

        .catch((error) => {
          console.log(error.response)
        })

    },


    // update profile
    updateProfile({
      commit
    }, payload) {

      console.log(commit)
      console.log(payload)
      var get_token = JSON.parse(localStorage.getItem("Token"))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + get_token,
        }
      })
      customAxios.post("http://image-hosting-sharing-service.herokuapp.com/api/users/update", {
          ...payload,
        })
        .then(response => {

          localStorage.setItem("users", JSON.stringify(response.data.data.user));
          console.log(response.data.data.user)
        })

        .catch((error) => {
          console.log(error.response)
        })

    },

    // forget password

    forgetPassword({
      commit
    }, payload) {
      console.log(commit)

      axios.post('', {
          ...payload,
          returnSecureToken: true,
          headers: {

            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'text/html; charset=utf-8'

          }
        })
        .then(response => {
          console.log(response.data.data)
          console.log(response.data.data.message)
        })
        .catch(error => console.log(error))
    },

    // OTP 
    OTP({
      commit
    }, payload) {
      console.log(commit)

      axios.post('', {
          ...payload,
          returnSecureToken: true,
          headers: {

            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'text/html; charset=utf-8'

          }
        })
        .then(response => {
          console.log(response.data.data)
          console.log(response.data.data.message)
        })
        .catch(error => console.log(error))
    },

    // Upload images
    uploadImages({
      commit
    }, payload) {
      console.log(commit)
      var get_token = JSON.parse(localStorage.getItem('Token'))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + get_token,
        },
      })
      customAxios
        .post('https://image-hosting-sharing-service.herokuapp.com/api/image/upload', {
          ...payload
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error.response)
        })
    },

    // Image listing
    listAllImages({
      commit
    }) {

      var get_token = JSON.parse(localStorage.getItem("Token"))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + get_token,
        }
      })
      customAxios.get("https://image-hosting-sharing-service.herokuapp.com/api/images")
        .then(response => {
          commit('SET_IMAGES', response.data.data);
          localStorage.setItem("all_images", JSON.stringify(response.data.data));
          console.log(response)
        })

        .catch((error) => {
          console.log(error.response)
        })

    },

  },

  modules: {}
})