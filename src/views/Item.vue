<template lang="html">
  <DataTable endpoint='/items' :config='config'/>
</template>

<script>
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    DataTable
  },
  data () {
    return {
      config: {
        columns: ['name', 'description', 'category_id', 'available', 'registry'],
        options: {
          headings: {
            name: 'Nome',
            description: 'Descrição',
            category_id: 'Categoria',
            available: 'Status',
            registry: 'Tombo'
          }
        },
        foreign_keys: [
          {
            column: 'category_id',
            endpoint: '/categories',
            attribute: 'name'
          }
        ],
        bools: [
          {
            column: 'available',
            isTrue: 'Disponível',
            isFalse: 'Indisponível'
          }
        ],
        history: {
          show: true,
          status: false,
          options: [
            { text: 'Disponíveis', value: false },
            { text: 'Todos', value: true }
          ]
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
