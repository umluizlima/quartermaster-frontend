<template lang="html">
  <b-modal id="editModal"
           ref="editModal"
           centered
           title="Editar"
           hide-footer
           no-close-on-backdrop>
           <b-alert variant="danger"
                    dismissible
                    :show="alert.show"
                    @dismissed="alert.show=false">
              {{ this.alert.message }}
            </b-alert>
           <CategoryForm v-if="resource=='/categories'"
                         :objectId="id"
                         :alert="this.alert"
                         @submitted="handleOk"/>
           <ItemForm v-else-if="resource=='/items'"
                     :objectId="id"
                     :alert="this.alert"
                     @submitted="handleOk"/>
           <UserForm v-else-if="resource=='/users'"
                     :objectId="id"
                     :alert="this.alert"
                     @submitted="handleOk"/>
           <ThirdpartyForm v-else-if="resource=='/thirdparties'"
                     :objectId="id"
                     :alert="this.alert"
                     @submitted="handleOk"/>
           <LendingForm v-else-if="resource=='/lendings'"
                     :objectId="id"
                     :alert="this.alert"
                     @submitted="handleOk"/>
           <ReservationForm v-else-if="resource=='/reservations'"
                     :objectId="id"
                     :alert="this.alert"
                     @submitted="handleOk"/>
  </b-modal>
</template>

<script>
import CategoryForm from '@/components/forms/CategoryForm.vue'
import ItemForm from '@/components/forms/ItemForm.vue'
import UserForm from '@/components/forms/UserForm.vue'
import ThirdpartyForm from '@/components/forms/ThirdpartyForm.vue'
import LendingForm from '@/components/forms/LendingForm.vue'
import ReservationForm from '@/components/forms/ReservationForm.vue'

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
      alert: {
        show: false,
        message: null
      }
    }
  },
  components: {
    CategoryForm,
    ItemForm,
    UserForm,
    ThirdpartyForm,
    LendingForm,
    ReservationForm
  },
  methods: {
    handleOk () {
      this.$emit('ok')
      this.$refs.editModal.hide()
    }
  }
}
</script>

<style lang="css">
#editModal * {
  text-align: left;
}
</style>
