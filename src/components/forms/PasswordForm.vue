<template lang="html">
  <b-form ref="passwordForm"
          @submit.prevent="handleSubmit">
    <custom-alert/>

    <b-form-group id="oldPasswordInputGroup"
                  label="Senha atual:"
                  label-for="oldPasswordInput">
      <b-form-input id="oldPasswordInput"
                    type="password"
                    v-model="form.old_password"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="newPasswordInputGroup"
                  label="Nova senha:"
                  label-for="newPasswordInput">
      <b-form-input id="newPasswordInput"
                    type="password"
                    v-model="form.new_password"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="newConfirmInputGroup"
                  label="Repita a nova senha:"
                  label-for="newConfirmInput">
      <b-form-input id="newConfirmInput"
                    type="password"
                    v-model="form.new_confirm"
                    required></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="warning">Confirmar</b-button>
  </b-form>
</template>

<script>
import { AUTH } from '@/utils/api'

export default {
  name: 'PasswordForm',
  data () {
    return {
      api: new AUTH(),
      form: {}
    }
  },
  mounted () {
    this.clearForm()
  },
  methods: {
    clearForm () {
      this.form = {
        old_password: null,
        new_password: null,
        new_confirm: null
      }
    },
    handleSubmit () {
      this.api.changePassword(this.form)
        .then((resp) => {
          this.$router.push('/')
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
</style>
