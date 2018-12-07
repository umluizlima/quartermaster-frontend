<template lang="html">
  <div>
    <b-form-group id="firstNameInputGroup"
                  label="Nome"
                  label-for="firtsNameInput"
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
  </div>
</template>

<script>
export default {
  name: 'ThirdpartyFields',
  props: {
    obj: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
