<template lang="html">
  <b-form ref="itemForm"
          @submit.prevent="handleSubmit">

    <b-form-group id="itemInputGroup"
                  label="Item:"
                  label-for="itemInput">
      <b-form-select id="itemInput"
                     v-model="form.item_id"
                     :options="items"
                     required/>
    </b-form-group>

    <b-form-group id="userInputGroup"
                  label="Responsável:"
                  label-for="userInput">
      <b-form-select id="userInput"
                     v-model="form.user_id"
                     :options="users"
                     required/>
    </b-form-group>

    <b-form-group id="thirdpartyInputGroup"
                  label="Tomador:"
                  label-for="thirdpartyInput">
      <b-form-select id="thirdpartyInput"
                     v-model="form.thirdparty_id"
                     :options="thirdparties"
                     required/>
    </b-form-group>

    <b-form-group id="dateStartInputGroup"
                  label="Data de retirada:"
                  label-for="dateStartInput">
      <b-form-input id="dateStartInput"
                    type="datetime-local"
                    v-model="form.date_start"></b-form-input>
    </b-form-group>

    <b-form-group id="dateEndInputGroup"
                  label="Data de retorno:"
                  label-for="dateEndInput">
      <b-form-input id="dateEndInput"
                    type="datetime-local"
                    v-model="form.date_end"></b-form-input>
    </b-form-group>

    <b-form-group id="dateReturnInputGroup"
                  label="Entregue em:"
                  label-for="dateReturnInput">
      <b-form-input id="dateReturnInput"
                    type="datetime-local"
                    v-model="form.date_return"></b-form-input>
    </b-form-group>
    <b-button v-if="objectId" type="submit" variant="warning">Confirmar</b-button>
    <b-button v-else type="submit" variant="success">Confirmar</b-button>
  </b-form>
</template>

<script>
import API from '@/utils/api'

export default {
  name: 'LendingForm',
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
      api: new API('/lendings'),
      form: {},
      users: [],
      thirdparties: [],
      items: []
    }
  },
  mounted () {
    this.clearForm()
    this.getUsers()
    this.getThirdparties()
    this.getItems()
  },
  watch: {
    objectId: function () {
      if (this.objectId != 0) {
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
    }
  },
  methods: {
    clearForm () {
      this.form = {
        item_id: null,
        date_start: null,
        date_end: null,
        date_return: null,
        user_id: null,
        thirdparty_id: null
      }
    },
    getObj () {
      return {
        item_id: this.form.item_id,
        date_start: this.form.date_start,
        date_end: this.form.date_end,
        date_return: this.form.date_return,
        user_id: this.form.user_id,
        thirdparty_id: this.form.thirdparty_id
      }
    },
    getUsers () {
      let foreignApi = new API('/users')
      foreignApi.get()
        .then((resp) => {
          for (let user of resp.data) {
            this.users.push({
              value: user.id,
              text: `${user.first_name} ${user.last_name}`
            })
          }
        })
    },
    getThirdparties () {
      let foreignApi = new API('/thirdparties')
      foreignApi.get()
        .then((resp) => {
          for (let thirdparty of resp.data) {
            this.thirdparties.push({
              value: thirdparty.id,
              text: `${thirdparty.first_name} ${thirdparty.last_name}`
            })
          }
        })
    },
    getItems () {
      let foreignApi = new API('/items')
      foreignApi.get()
        .then((resp) => {
          for (let item of resp.data) {
            this.items.push({
              value: item.id,
              text: item.name
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
