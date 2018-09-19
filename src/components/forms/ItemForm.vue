<template lang="html">
  <b-form ref="itemForm"
          @submit.prevent="handleSubmit">

    <b-form-group id="nameInputGroup"
                  label="Nome:"
                  label-for="nameInput">
      <b-form-input id="nameInput"
                    type="text"
                    v-model="form.name"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="descriptionInputGroup"
                  label="Descrição:"
                  label-for="descriptionInput">
      <b-form-input id="descriptionInput"
                    type="text"
                    v-model="form.description"></b-form-input>
    </b-form-group>

    <b-form-group id="categoryInputGroup"
                  label="Categoria:"
                  label-for="categoryInput">
      <b-form-select id="categoryInput"
                     v-model="form.category_id"
                     :options="categories"/>
    </b-form-group>

    <b-form-group id="statusInputGroup"
                  label="Status:"
                  label-for="statusInput">
      <b-form-radio-group id="statusInput"
                          v-model="form.available"
                          :options="status"/>
    </b-form-group>

    <b-form-group id="registryInputGroup"
                  label="Tombo:"
                  label-for="registryInput">
      <b-form-input id="registryInput"
                    type="number"
                    v-model="form.registry"></b-form-input>
    </b-form-group>
    <b-button v-if="objectId" type="submit" variant="warning">Confirmar</b-button>
    <b-button v-else type="submit" variant="success">Confirmar</b-button>
  </b-form>
</template>

<script>
import API from '@/utils/api'

export default {
  name: 'ItemForm',
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
      api: new API('/items'),
      form: {},
      status: [
        { text: 'Disponível', value: true },
        { text: 'Indisponível', value: false }
      ],
      categories: [
        { value: null, text: '' }
      ]
    }
  },
  mounted () {
    this.clearForm()
    this.getCategories()
  },
  watch: {
    objectId: function () {
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
  },
  methods: {
    clearForm () {
      this.form = {
        name: null,
        description: null,
        category_id: null,
        available: true,
        registry: null
      }
    },
    getObj () {
      return {
        name: this.form.name,
        description: this.form.description,
        category_id: this.form.category_id,
        available: this.form.available,
        registry: this.form.registry
      }
    },
    getCategories () {
      let foreignApi = new API('/categories')
      foreignApi.get()
        .then((resp) => {
          for (let category of resp.data) {
            this.categories.push({
              value: category.id,
              text: category.name
            })
          }
        })
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
