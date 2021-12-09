import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import router from '../router'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-sec-app',
  storage: localStorage
})

export default new Vuex.Store({
  plugins: [
    vuexPersist.plugin
  ],

  state: {
    usuario: null,
    token: null,
    perfil: null,
    morador: {
      id: null,
      email: null,
      cpf: null, 
      nome: null, 
      telefone: null,
      apartamentos: []
    }
  },

  mutations: {
    setUsuario (state, usuario) {
      state.usuario = usuario
    },
    setToken (state, token)  {
      state.token = token
    },
    setPerfil (state, perfil)  {
      state.perfil = perfil
    },
    setMorador (state, morador) {
      state.morador = morador
    },
    logout (state) {
      state.token = null
      state.usuario = null
      state.perfil = null
      state.morador = null

      router.push('/');
    }
  },

  actions: {
  },

  modules: {
  }
})
