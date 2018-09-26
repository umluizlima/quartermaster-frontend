<template lang="html">
  <b-form ref="userForm"
          @submit.prevent="handleSubmit">

    <b-form-group id="firstNameInputGroup"
                  label="Nome:"
                  label-for="firstNameInput">
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

    <b-form-group id="adminInputGroup"
                  label="Função:"
                  label-for="adminInput">
      <b-form-radio-group id="adminInput"
                          v-model="form.admin"
                          buttons
                          button-variant="outline-primary"
                          :options="admin"
                          required/>
    </b-form-group>

    <b-form-group v-if="!objectId"
                  id="passwordInputGroup"
                  label="Senha:"
                  label-for="passwordInput">
      <b-form-input id="passwordInput"
                    type="password"
                    v-model="form.password"
                    required></b-form-input>
    </b-form-group>

    <b-form-group v-if="!objectId"
                  id="confirmInputGroup"
                  label="Repita a senha:"
                  label-for="confirmInput">
      <b-form-input id="confirmInput"
                    type="password"
                    v-model="form.confirm"
                    required></b-form-input>
    </b-form-group>
    <b-button v-if="objectId" type="submit" variant="warning">Confirmar</b-button>
    <b-button v-else type="submit" variant="success">Confirmar</b-button>
  </b-form>
</template>

<script>
import API from '@/utils/api'

export default {
  name: 'UserForm',
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
      api: new API('/users'),
      form: {},
      admin: [
        { text: 'Administrador', value: true },
        { text: 'Usuário', value: false }
      ]
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
        email: null,
        admin: null,
        password: null,
        confirm: null
      }
    },
    getObj () {
      return {
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        email: this.form.email,
        admin: this.form.admin,
        password: this.form.password,
        confirm: this.form.confirm
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
