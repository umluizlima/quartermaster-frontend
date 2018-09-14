<template lang="html">
  <!-- <b-modal v-model="modalShow"> -->
  <b-modal id="deleteModal">
    Hello From Modal {{ this.id }}!
  </b-modal>

  <!-- <b-modal id="deleteModal"
           centered
           title="Apagar"
           ok-title="Confirmar"
           cancel-title="Cancelar"
           hide-header-close
           no-close-on-backdrop
           @ok="handleOk">
    <b-alert variant="danger"
             dismissible
             :show="showAlert"
             @dismissed="showAlert=false">
      {{ this.message }}
    </b-alert>
    <p>Tem certeza?</p>
  </b-modal> -->
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
    }
  }
}
</script>

<style lang="css">
</style>
