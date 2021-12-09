<template>
  <div class="container">
    <p>
      <strong>Email:</strong>
      {{morador.email}}
    </p>
    <p>
      <strong>Nome:</strong>
      {{morador.nome}}
    </p>
    <p>
      <strong>CPF:</strong>
      {{morador.cpf}}
    </p>
    <p>
      <strong>Telefone:</strong>
      {{morador.telefone}}
    </p>
    <p>
      <strong>Perfil:</strong>
      {{morador.perfil}}
    </p>
    <strong>Apartamentos:</strong>
    <ul>
      <li v-for="(apartamento,index) in morador.apartamentos" :key="index">{{apartamento.unidade}}</li>
    </ul>
  </div>
</template>

<script>
import MoradorService from '../services/morador.service';
import { mapState, mapMutations } from 'vuex'
import store from '../store';

export default {
  name: 'Profile',
  data() {
    return {
      content: ''
    };
  },
  computed: {
        ...mapState([
            'morador',
        ])
  },
  methods: {
    ...mapMutations([
      'setMorador',
    ]),
  },
  mounted() {
    MoradorService.getMoradorInfo(store.state.usuario.email).then(
      response => {
        this.content = response.data
        this.setMorador(response.data)
      }
    )
  }
};
</script>