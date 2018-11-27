<template lang="html">
  <div class="lend">
    <h1>Emprestar um item</h1>
    <p>Selecione qual item está sendo emprestado e para quem.</p>

    <custom-alert/>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="itemInputGroup"
                    label="Item:"
                    label-for="itemInput">
        <b-form-select id="itemInput"
                       v-model="form.item_id"
                       :options="items"
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

      <b-button type="submit" variant="success">Confirmar</b-button>
    </b-form>
  </div>
</template>

<script>
import { API } from '@/utils/api'
import moment from 'moment'

export default {
  name: 'Lend',
  data () {
    return {
      api: new API('/lendings'),
      thirdparties: [],
      items: [],
      form: {
        item_id: null,
        user_id: this.$store.getters.userId,
        thirdparty_id: null,
        date_start: null,
        date_end: null
      }
    }
  },
  mounted () {
    this.getThirdparties()
    this.getItems()
  },
  methods: {
    buttonPush () {
      this.$router.push({ name: 'home' })
    },
    getThirdparties () {
      let foreignApi = new API('/thirdparties')
      foreignApi.get()
        .then((resp) => {
          for (let thirdparty of resp.data) {
            this.thirdparties.push({
              value: thirdparty.id,
              text: `${thirdparty.first_name} ${thirdparty.last_name} - ${thirdparty.email}`
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
              text: `${item.name}`
            })
          }
        })
    },
    handleSubmit () {
      let now = moment()
      this.form.date_start = now.format('YYYY-MM-DDTHH:mm')
      this.form.date_end = now.add(7, 'days').format('YYYY-MM-DDTHH:mm')

      this.api.create(this.form)
        .then((resp) => {
          this.lendItem()
        })
        .catch((err) => {
          if (err.response.status === 400) {
            this.$store.commit('setError', err.response.data.message)
          }
        })
    },
    lendItem () {
      let foreignApi = new API('/items')
      // Busca o item que se quer emprestar
      foreignApi.getOne(this.form.item_id)
        .then((resp) => {
          let lentItem = resp.data
          lentItem.available = false
          delete lentItem.id
          // Atualiza o status de disponibilidade do item
          foreignApi.update(this.form.item_id, lentItem)
            .then((resp) => {
              this.$router.push({ name: 'home' })
            })
            .catch((err) => {
              if (err.response.status === 400) {
                this.$store.commit('setError', err.response.data.message)
              }
            })
        })
    }
  }
}
</script>

<style lang="css">
.lend {
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
}

@media screen and (min-width: 800px) {
  .lend {
    max-width: 50%;
  }
}

.lend > * {
  width: 100%;
}
</style>
