<template lang="html">
  <div class="newPerson">
    <h1>Cadastrar nova pessoa</h1>
    <p v-if="$store.getters.isLoggedIn">Preencha este formulário para cadastrar uma pessoa que queira pegar um item emprestado ou então reservar a sala de treinamentos.</p>
    <p v-else>Cadastre-se para poder pegar itens emprestados ou reservar a sala de treinamentos do CDG Hub. Obs.: os empréstimos e reservas devem ser registrados pelos responsáveis do laboratório.</p>

    <custom-alert/>
    <CustomForm :resource="api.resource" @submitted="createResource"/>
  </div>
</template>

<script>
import { API } from '@/utils/api'
import CustomForm from '@/components/forms/CustomForm.vue'

export default {
  name: 'NewPerson',
  data () {
    return {
      api: new API('/thirdparties')
    }
  },
  components: {
    CustomForm
  },
  methods: {
    createResource (data) {
      this.api.create(data)
        .then(() => {
          this.$router.push({ name: 'home' })
        })
        .catch((err) => {
          if (err.response.status === 400) {
            this.$store.commit('setError', err.response.data.message)
          }
        })
    }
  }
}
</script>

<style lang="css">
.newPerson {
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
}

@media screen and (min-width: 800px) {
  .newPerson {
    max-width: 50%;
  }
}

.newPerson > * {
  width: 100%;
}
</style>
