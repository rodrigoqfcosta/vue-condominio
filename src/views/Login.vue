<template>
  <form @submit.prevent="login">
    <h2>Login</h2>
    <div class="form-group">
      <label for="email">E-mail </label>
      <input type="text" id="email" class="form-control" required autofocus v-model="email">
    </div>
    <div class="form-group">
      <label for="inputPassword">Senha </label>
      <input type="password" id="inputPassword" class="form-control" required v-model="senha">
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Ok</button>
  </form>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    ...mapMutations([
      'setUsuario',
      'setToken',
      'setPerfil'
    ]),
    login() {
      axios.post('login',
          {
            email: this.email,
            password: this.senha
          })
        .then(res => {
          this.setUsuario(res.data)
          this.setToken(res.headers.token)
          this.setPerfil(res.headers.perfil)
          this.$router.push('/perfil')
        })
        .catch(error => console.log(error))
    }
  }
}
</script>