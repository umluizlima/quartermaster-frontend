<template lang="html">
  <div class="reserve">
    <h1>Reservar a sala de treinamentos</h1>
    <p>Preencha este formulário para registrar um evento.</p>
    <custom-alert/>
    <CustomForm :resource="api.resource" @submitted="createResource"/>
  </div>
</template>

<script>
import { API } from '@/utils/api'
import CustomForm from '@/components/forms/CustomForm.vue'

export default {
  name: 'NewReservation',
  data () {
    return {
      api: new API('/reservations')
    }
  },
  components: {
    CustomForm
  },
  methods: {
    createResource (data) {
      this.api.create(data)
        .then((resp) => {
          this.$router.push('home')
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
.reserve {
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
}

@media screen and (min-width: 800px) {
  .reserve {
    max-width: 50%;
  }
}

.reserve > * {
  width: 100%;
}
</style>
