<template lang="html">
  <div>
    <h1>Saindo...</h1>
    <p>Você será redirecionado em instantes.</p>
  </div>
</template>

<script>
import { API } from '@/utils/api'

export default {
  data () {
    return {
      api: new API('/users')
    }
  },
  mounted () {
    this.logout()
  },
  methods: {
    logout () {
      this.api.logout()
        .then((resp) => {
          this.$store.dispatch('logout')
          this.$router.push('/')
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
</style>
