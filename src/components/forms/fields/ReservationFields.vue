<template lang="html">
  <div>
    <b-form-group id="userInputGroup"
                  label="Responsável:"
                  label-for="userInput">
      <b-form-select id="userInput"
                     v-model="obj.user_id"
                     :options="users"
                     required/>
    </b-form-group>

    <b-form-group id="thirdpartyInputGroup"
                  label="Tomador:"
                  label-for="thirdpartyInput">
      <b-form-select id="thirdpartyInput"
                     v-model="obj.thirdparty_id"
                     :options="thirdparties"
                     required/>
    </b-form-group>

    <b-form-group id="nameInputGroup"
                  label="Evento:"
                  label-for="nameInput">
      <b-form-input id="nameInput"
                    type="text"
                    v-model="obj.name"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="descriptionInputGroup"
                  label="Descrição:"
                  label-for="descriptionInput">
      <b-form-input id="descriptionInput"
                    type="text"
                    v-model="obj.description"></b-form-input>
    </b-form-group>

    <b-form-group id="dateStartInputGroup"
                  label="Início:"
                  label-for="dateStartInput">
      <b-form-input id="dateStartInput"
                    type="datetime-local"
                    v-model="obj.date_start"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="dateEndInputGroup"
                  label="Fim:"
                  label-for="dateEndInput">
      <b-form-input id="dateEndInput"
                    type="datetime-local"
                    v-model="obj.date_end"
                    required></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import { API } from '@/utils/api'
import moment from 'moment'

export default {
  name: 'ReservationForm',
  props: {
    obj: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      users: [],
      thirdparties: []
    }
  },
  mounted () {
    if (!this.obj.user_id) {
      this.obj.user_id = this.$store.getters.userId
    }
    if (!this.obj.date_start) {
      this.obj.date_start = moment().format('YYYY-MM-DDTHH:mm')
    }
    if (!this.obj.date_end) {
      this.obj.date_end = moment().add(4, 'hours').format('YYYY-MM-DDTHH:mm')
    }
    this.getUsers()
    this.getThirdparties()
  },
  methods: {
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
    }
  }
}
</script>

<style lang="css">
</style>
