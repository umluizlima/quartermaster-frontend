<template lang="html">
  <b-modal id="createModal"
           ref="createModal"
           centered
           title="Adicionar"
           @hide="$store.commit('clearError')"
           hide-footer
           no-close-on-backdrop>
           <custom-alert/>
           <CategoryForm v-if="resource=='/categories'"
                         :alert="this.alert"
                         @submitted="handleOk"/>
           <ItemForm v-else-if="resource=='/items'"
                     :alert="this.alert"
                     @submitted="handleOk"/>
           <UserForm v-else-if="resource=='/users'"
                     :alert="this.alert"
                     @submitted="handleOk"/>
           <ThirdpartyForm v-else-if="resource=='/thirdparties'"
                     :alert="this.alert"
                     @submitted="handleOk"/>
           <LendingForm v-else-if="resource=='/lendings'"
                     :alert="this.alert"
                     @submitted="handleOk"/>
           <ReservationForm v-else-if="resource=='/reservations'"
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
  name: 'CreateModal',
  props: {
    resource: {
      type: String,
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
      this.$refs.createModal.hide()
    }
  }
}
</script>

<style lang="css">
#createModal * {
  text-align: left;
}
</style>
