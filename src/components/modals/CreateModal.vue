<template lang="html">
  <b-modal id="createModal"
           ref="createModal"
           centered
           title="Adicionar"
           ok-title="Confirmar"
           ok-variant="success"
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
            Some Form Here!
           <CategoryForm v-if="api.resource=='/categories'" :obj="data"/>
  </b-modal>
</template>

<script>
import CategoryForm from '@/components/forms/CategoryForm.vue'

export default {
  name: 'CreateModal',
  props: {
    api: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showAlert: false,
      message: null,
      data: {}
    }
  },
  components: {
    CategoryForm
  },
  methods: {
    handleOk () {
      this.api.create(this.data)
      .then(() => {
        this.$emit('ok')
        this.data = {}
        this.$refs.createModal.hide()
      })
      .catch((err) => {
        if (err.response.status === 400) {
          this.message = err.response.data.message
          this.showAlert = true
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
