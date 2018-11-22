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

    <b-form-group id="itemInputGroup"
                  label="Item:"
                  label-for="itemInput">
      <b-form-select id="itemInput"
                     v-model="obj.item_id"
                     :options="items"
                     required/>
    </b-form-group>

    <b-form-group id="dateStartInputGroup"
                  label="Retirada:"
                  label-for="dateStartInput">
      <b-form-input id="dateStartInput"
                    type="datetime-local"
                    :value="moment().format('YYYY-MM-DDTHH:mm')"
                    v-model="obj.date_start"
                    required></b-form-input>
    </b-form-group>

    <b-form-group id="dateEndInputGroup"
                  label="Retorno:"
                  label-for="dateEndInput">
      <b-form-input id="dateEndInput"
                    type="datetime-local"
                    :value="moment().add(7, 'days').format('YYYY-MM-DDTHH:mm')"
                    v-model="obj.date_end"
                    required></b-form-input>
    </b-form-group>

    <b-form-group v-if="obj.id"
                  id="dateReturnInputGroup"
                  label="Entregue em:"
                  label-for="dateReturnInput">
      <b-form-input id="dateReturnInput"
                    type="datetime-local"
                    :value="moment().format('YYYY-MM-DDTHH:mm')"
                    v-model="obj.date_return"></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import { API } from '@/utils/api'
import moment from 'moment'

export default {
  name: 'LendingForm',
  props: {
    obj: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      users: [],
      thirdparties: [],
      items: []
    }
  },
  mounted () {
    this.getUsers()
    this.getThirdparties()
    this.getItems()
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
    }
  }
}
</script>

<style lang="css">
</style>
