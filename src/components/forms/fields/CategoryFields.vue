<template lang="html">
  <div>
    <b-form-group id="nameInputGroup"
                  label="Nome"
                  label-for="nameInput"
                  label-class="font-weight-bold">
      <b-form-input id="nameInput"
                    type="text"
                    v-model="obj.name"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="descriptionInputGroup"
                  label="Descrição"
                  label-for="descriptionInput"
                  label-class="font-weight-bold">
      <b-form-input id="descriptionInput"
                    type="text"
                    v-model="obj.description"></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'CategoryFields',
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
