<template lang="html">
  <b-form ref="customForm"
          @submit.prevent="onSubmit">

    <b-form-group id="nameInputGroup"
                  label="Nome:"
                  label-for="nameInput">
      <b-form-input id="nameInput"
                    type="text"
                    v-model="form.name"
                    required
                    autofocus></b-form-input>
    </b-form-group>

    <b-form-group id="descriptionInputGroup"
                  label="Descrição:"
                  label-for="descriptionInput">
      <b-form-input id="descriptionInput"
                    type="text"
                    v-model="form.description"></b-form-input>
    </b-form-group>
    <b-btn type="submit" variant="success">Confirmar</b-btn>
  </b-form>
</template>

<script>
export default {
  data () {
    return {
      form: this.obj
    }
  },
  props: {
    obj: {
      type: Object,
      required: true
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submitted', this.form)
    },
    clear () {
      this.form.name = null
      this.form.description = null
    }
  }
}
</script>

<style lang="css">
</style>
