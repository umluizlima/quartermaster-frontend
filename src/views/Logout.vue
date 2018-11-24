<template lang="html">
  <div>
    <h1>Saindo...</h1>
    <p>Você será redirecionado em instantes.</p>
  </div>
</template>

<script>
import { AUTH } from '@/utils/api'

export default {
  data () {
    return {
      api: new AUTH()
    }
  },
  mounted () {
    this.logout()
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.api.logout()
        .then((resp) => {
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
