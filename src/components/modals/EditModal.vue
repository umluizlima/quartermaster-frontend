<template lang="html">
  <b-modal id="editModal"
           ref="editModal"
           centered
           title="Editar"
           @hide="$store.commit('clearError')"
           hide-footer
           no-close-on-backdrop>
    <custom-alert/>
    <CustomForm :resource="resource" :objectId="id" @submitted="editResource"/>
  </b-modal>
</template>

<script>
import { API } from '@/utils/api'
import CustomForm from '@/components/forms/CustomForm.vue'

export default {
  name: 'EditModal',
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
  components: {
    CustomForm
  },
  methods: {
    editResource (data) {
      this.api.update(this.id, data)
        .then(() => {
          this.$emit('ok')
          this.$refs.editModal.hide()
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
#editModal * {
  text-align: left;
}
</style>
