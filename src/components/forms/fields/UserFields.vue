<template lang="html">
  <div>
    <b-form-group id="firstNameInputGroup"
                  label="Nome:"
                  label-for="firstNameInput">
      <b-form-input id="firstNameInput"
                    type="text"
                    v-model="obj.first_name"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="lastNameInputGroup"
                  label="Sobrenome:"
                  label-for="lastNameInput">
      <b-form-input id="lastNameInput"
                    type="text"
                    v-model="obj.last_name"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="emailInputGroup"
                  label="E-mail:"
                  label-for="emailInput">
      <b-form-input id="emailInput"
                    type="email"
                    v-model="obj.email"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="adminInputGroup"
                  label="Função:"
                  label-for="adminInput">
      <b-form-radio-group id="adminInput"
                          v-model="obj.admin"
                          buttons
                          button-variant="outline-primary"
                          :options="admin"
                          required/>
    </b-form-group>

    <!-- <b-form-group v-if="!objectId"
                  id="passwordInputGroup"
                  label="Senha:"
                  label-for="passwordInput">
      <b-form-input id="passwordInput"
                    type="password"
                    v-model="obj.password"
                    required></b-form-input>
    </b-form-group>

    <b-form-group v-if="!objectId"
                  id="confirmInputGroup"
                  label="Repita a senha:"
                  label-for="confirmInput">
      <b-form-input id="confirmInput"
                    type="password"
                    v-model="obj.confirm"
                    required></b-form-input>
    </b-form-group> -->
  </div>
</template>

<script>
import API from '@/utils/api'

export default {
  name: 'UserFields',
  props: {
    obj: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      admin: [
        { text: 'Administrador', value: true },
        { text: 'Usuário', value: false }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
