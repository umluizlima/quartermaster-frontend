<template lang="html">
  <b-modal id="createModal"
           ref="createModal"
           centered
           title="Adicionar"
           @hide="$store.commit('clearError')"
           hide-footer
           no-close-on-backdrop>
    <custom-alert/>
    <CustomForm :resource="resource" @submitted="createResource"/>
  </b-modal>
</template>

<script>
import { API } from '@/utils/api'
import CustomForm from '@/components/forms/CustomForm.vue'

export default {
  name: 'CreateModal',
  props: {
    resource: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      api: new API(this.resource)
    }
  },
  components: {
    CustomForm
  },
  methods: {
    createResource (data) {
      this.api.create(data)
        .then(() => {
          this.$emit('ok')
          this.$refs.createModal.hide()
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
