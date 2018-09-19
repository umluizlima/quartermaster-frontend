<template lang="html">
  <b-modal id="deleteModal"
           ref="deleteModal"
           centered
           title="Apagar"
           hide-footer
           no-close-on-backdrop>
    <b-alert variant="danger"
             dismissible
             :show="alert.show"
             @dismissed="alert.show=false">
      {{ this.alert.message }}
    </b-alert>
    <p>Tem certeza?</p>
    <b-btn variant="danger" @click="handleOk">Confirmar</b-btn>
  </b-modal>
</template>

<script>
import API from '@/utils/api'

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
      api: new API(this.resource),
      alert: {
        show: false,
        message: null
      }
    }
  },
  methods: {
    handleOk () {
      this.api.del(this.id)
      .catch((err) => {
        if (err.response.status === 404) {
          this.alert.message = err.response.data.message
          this.alert.show = true
        }
      })
      .then(() => {
        this.$emit('ok')
        this.$refs.deleteModal.hide()
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
