<template lang="html">
  <b-form ref="thirdpartyForm"
          @submit.prevent="handleSubmit">

    <b-form-group id="firstNameInputGroup"
                  label="Nome:"
                  label-for="firtsNameInput">
      <b-form-input id="firstNameInput"
                    type="text"
                    v-model="form.first_name"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="lastNameInputGroup"
                  label="Sobrenome:"
                  label-for="lastNameInput">
      <b-form-input id="lastNameInput"
                    type="text"
                    v-model="form.last_name"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="emailInputGroup"
                  label="E-mail:"
                  label-for="emailInput">
      <b-form-input id="emailInput"
                    type="email"
                    v-model="form.email"
                    required></b-form-input>
    </b-form-group>
    <b-button v-if="objectId" type="submit" variant="warning">Confirmar</b-button>
    <b-button v-else type="submit" variant="success">Confirmar</b-button>
  </b-form>
</template>

<script>
import API from '@/utils/api'

export default {
  name: 'ThirdpartyForm',
  props: {
    objectId: {
      type: Number,
      required: false
    },
    alert: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      api: new API('/thirdparties'),
      form: {}
    }
  },
  mounted () {
    this.clearForm()
  },
  watch: {
    objectId: function () {
      if (this.objectId != 0) {
        this.api.getOne(this.objectId)
          .then((resp) => {
            this.form = resp.data
          })
          .catch((err) => {
            if (err.response.status === 404) {
              this.alert.message = err.response.data.message
              this.alert.show = true
            }
          })
      }
    }
  },
  methods: {
    clearForm () {
      this.form = {
        first_name: null,
        last_name: null,
        email: null
      }
    },
    getObj () {
      return {
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        email: this.form.email
      }
    },
    handleSubmit () {
      if (this.objectId) {
        this.api.update(this.objectId, this.getObj())
          .then(() => {
            this.clearForm()
            this.$emit('submitted')
          })
          .catch((err) => {
            if (err.response.status === 400) {
              this.alert.message = err.response.data.message
              this.alert.show = true
            }
          })
      } else {
        this.api.create(this.getObj())
          .then(() => {
            this.clearForm()
            this.$emit('submitted')
          })
          .catch((err) => {
            if (err.response.status === 400) {
              this.alert.message = err.response.data.message
              this.alert.show = true
            }
          })
      }
    }
  }
}
</script>

<style lang="css">
</style>
