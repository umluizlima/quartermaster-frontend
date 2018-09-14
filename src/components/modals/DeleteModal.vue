<template lang="html">
  <b-modal id="deleteModal"
           ref="deleteModal"
           centered
           title="Apagar"
           ok-title="Confirmar"
           ok-variant="danger"
           cancel-title="Cancelar"
           hide-header-close
           no-close-on-backdrop
           @ok.prevent="handleOk">
    <b-alert variant="danger"
             dismissible
             :show="showAlert"
             @dismissed="showAlert=false">
      {{ this.message }}
    </b-alert>
    <p>Tem certeza?</p>
  </b-modal>
</template>

<script>
export default {
  name: 'DeleteModal',
  props: {
    id: {
      type: Number,
      required: true
    },
    api: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showAlert: false,
      message: null
    }
  },
  methods: {
    onClick () {
      console.log(`Clicou no delete do id ${this.id}`)
    },
    handleOk () {
      this.api.del(this.id)
      .catch((err) => {
        if (err.response.status === 404) {
          this.message = err.response.data.message
          this.showAlert = true
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
</style>
