<template lang="html">
  <b-form ref="loginForm"
          @submit.prevent="handleSubmit">
    <custom-alert/>

    <b-form-group id="emailInputGroup"
                  label="E-mail:"
                  label-for="emailInput">
      <b-form-input id="emailInput"
                    type="email"
                    v-model="form.email"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="passwordInputGroup"
                  label="Senha:"
                  label-for="passwordInput">
      <b-form-input id="passwordInput"
                    type="password"
                    v-model="form.password"
                    required></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="success">Entrar</b-button>
  </b-form>
</template>

<script>
import API from '@/utils/api'

export default {
  name: 'LoginForm',
  data () {
    return {
      api: new API('/users'),
      form: {},
      alert: {
        show: false,
        message: null
      }
    }
  },
  mounted () {
    this.clearForm()
  },
  methods: {
    clearForm () {
      this.form = {
        email: null,
        password: null
      }
    },
    getObj () {
      return {
        email: this.form.email,
        password: this.form.password
      }
    },
    handleSubmit () {
      this.$store.dispatch('login', this.getObj())
    }
  }
}
</script>

<style lang="css">
</style>
