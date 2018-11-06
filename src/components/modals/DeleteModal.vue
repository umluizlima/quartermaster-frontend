<template lang="html">
  <b-modal id="deleteModal"
           ref="deleteModal"
           centered
           title="Apagar"
           @hide="$store.commit('clearError')"
           hide-footer
           no-close-on-backdrop>
    <custom-alert/>
    <p>Tem certeza?</p>
    <b-btn variant="danger" @click="deleteResource">Confirmar</b-btn>
  </b-modal>
</template>

<script>
import { API } from '@/utils/api'

export default {
  name: 'DeleteModal',
  props: {
    resource: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      api: new API(this.resource)
    }
  },
  methods: {
    deleteResource () {
      this.api.del(this.id)
        .then(() => {
          this.$emit('ok')
          this.$refs.deleteModal.hide()
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.$store.commit('setError', err.response.data.message)
          }
        })
    }
  }
}
</script>

<style lang="css">
#deleteModal * {
  text-align: left;
}
</style>
