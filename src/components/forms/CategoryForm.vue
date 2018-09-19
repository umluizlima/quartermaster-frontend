<template lang="html">
  <b-form ref="categoryForm"
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
    <b-button v-if="objectId" type="submit" variant="warning">Confirmar</b-button>
    <b-button v-else type="submit" variant="success">Confirmar</b-button>
  </b-form>
</template>

<script>
import API from '@/utils/api'

export default {
  name: 'CategoryForm',
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
      api: new API('/categories'),
      form: {}
    }
  },
  mounted () {
    this.clearForm()
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
        description: null
      }
    },
    getObj () {
      return {
        name: this.form.name,
        description: this.form.description
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
