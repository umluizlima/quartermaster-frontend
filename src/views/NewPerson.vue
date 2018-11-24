<template lang="html">
  <div>
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
#createModal * {
  text-align: left;
}
</style>
