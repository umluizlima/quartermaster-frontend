<template lang="html">
  <b-form ref="categoryForm"
          @submit.prevent="">

    <b-form-group id="nameInputGroup"
                  label="Nome:"
                  label-for="nameInput">
      <b-form-input id="nameInput"
                    type="text"
                    v-model="obj.name"
                    required
                    autofocus></b-form-input>
    </b-form-group>

    <b-form-group id="descriptionInputGroup"
                  label="Descrição:"
                  label-for="descriptionInput">
      <b-form-input id="descriptionInput"
                    type="text"
                    v-model="obj.description"></b-form-input>
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: 'CategoryForm',
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
