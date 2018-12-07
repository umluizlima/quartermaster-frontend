<template lang="html">
  <div>
    <b-form-group id="firstNameInputGroup"
                  label="Nome"
                  label-for="firstNameInput"
                  label-class="font-weight-bold">
      <b-form-input id="firstNameInput"
                    type="text"
                    v-model="obj.first_name"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="lastNameInputGroup"
                  label="Sobrenome"
                  label-for="lastNameInput"
                  label-class="font-weight-bold">
      <b-form-input id="lastNameInput"
                    type="text"
                    v-model="obj.last_name"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="emailInputGroup"
                  label="E-mail"
                  label-for="emailInput"
                  label-class="font-weight-bold">
      <b-form-input id="emailInput"
                    type="email"
                    v-model="obj.email"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="adminInputGroup"
                  label="Função"
                  label-for="adminInput"
                  label-class="font-weight-bold">
      <b-form-radio-group id="adminInput"
                          v-model="obj.admin"
                          buttons
                          button-variant="outline-primary"
                          :options="admin"
                          required/>
    </b-form-group>

    <p> Novos usuários são criados com a senha padrão 'abcdef'</p>
  </div>
</template>

<script>
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
