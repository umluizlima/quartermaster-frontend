<template lang="html">
  <div class="return">
    <h1>Devolver um item</h1>
    <p>Selecione qual item está sendo devolvido.</p>

    <custom-alert/>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="itemInputGroup"
                    label="Item:"
                    label-for="itemInput">
        <b-form-select id="itemInput"
                       v-model="lending_id"
                       :options="options"
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
  name: 'Return',
  data () {
    return {
      api: new API('/lendings'),
      options: [],
      lendings: [],
      items: [],
      lending_id: null
    }
  },
  mounted () {
    this.getItems()
  },
  methods: {
    getItems () {
      let api = new API('/items')
      api.getAll()
        .then((resp) => {
          this.items = resp.data
          this.getLendings()
        })
    },
    getLendings () {
      this.api.get()
        .then((resp) => {
          this.lendings = resp.data
          this.setOptions()
        })
    },
    setOptions () {
      for (let lending of this.lendings) {
        this.options.push({
          value: lending.id,
          text: `${this.items.find(x => x.id === lending.item_id)['name']} emprestado em ${moment(lending.date_start).locale('pt-BR').format('DD/MM/YY [às] HH:mm')}`
        })
      }
    },
    returnItem () {
      let api = new API('/items')
      let id = this.lendings.find(x => x.id === this.lending_id)['item_id']
      api.getOne(id)
        .then((resp) => {
          resp.data.available = true
          delete resp.data.id
          api.update(id, resp.data)
            .then((resp) => {
              console.log('Update do item bem sucedido')
              this.$router.push('/')
            })
            .catch((err) => {
              if (err.response.status === 400) {
                this.$store.commit('setError', err.response.data.message)
              }
            })
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.$store.commit('setError', err.response.data.message)
          }
        })
    },
    handleSubmit () {
      let lending = this.lendings.find(x => x.id === this.lending_id)
      lending.date_return = moment().format('YYYY-MM-DDTHH:mm')
      delete lending.id

      console.log(lending)

      this.api.update(this.lending_id, lending)
        .then((resp) => {
          console.log('Update do emprestimo bem sucedido')
          this.returnItem()
        })
        .catch((err) => {
          if (err.response.status === 400) {
            this.$store.commit('setError', err.response.data.message)
          }
        })
    }
  }
}
</script>

<style lang="css">
.return {
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
}

@media screen and (min-width: 800px) {
  .return {
    max-width: 50%;
  }
}

.return > * {
  width: 100%;
}
</style>
