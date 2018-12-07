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

    <b-form-group id="categoryInputGroup"
                  label="Categoria"
                  label-for="categoryInput"
                  label-class="font-weight-bold">
      <b-form-select id="categoryInput"
                     v-model="obj.category_id"
                     :options="categories"/>
    </b-form-group>

    <b-form-group id="statusInputGroup"
                  label="Status"
                  label-for="statusInput"
                  label-class="font-weight-bold">
      <b-form-radio-group id="statusInput"
                          v-model="obj.available"
                          buttons
                          button-variant="outline-primary"
                          :options="status"
                          required/>
    </b-form-group>

    <b-form-group id="registryInputGroup"
                  label="Tombo"
                  label-for="registryInput"
                  label-class="font-weight-bold">
      <b-form-input id="registryInput"
                    type="number"
                    v-model="obj.registry"></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import { API } from '@/utils/api'

export default {
  name: 'ItemFields',
  props: {
    obj: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
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
    this.getCategories()
  },
  methods: {
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
    }
  }
}
</script>

<style lang="css">
</style>
