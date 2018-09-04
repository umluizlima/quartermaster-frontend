<template lang="html">
  <v-client-table :data="data" :columns="columns" :options="options"></v-client-table>
</template>

<script>
import API from '@/utils/api'
const api = new API('/categories')

export default {
  data () {
    return {
      api: api,
      columns: ['name', 'description'],
      data: [],
      options: {
        headings: {
          name: 'Nome',
          description: 'Descrição'
        }
      }
    }
  },
  methods: {
    getData () {
      this.data = []
      api.get()
        .then((resp) => {
          this.data = resp.data
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="css">
</style>
