<template lang="html">
  <div>
    <h2>ITENS</h2>
    <DataTable endpoint='/items' :config='config'/>
  </div>
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
        columns: [
          { key: 'name', label: 'Nome', sortable: true },
          { key: 'description', label: 'Descrição', sortable: true },
          { key: 'category_id', label: 'Categoria', sortable: true },
          { key: 'available', label: 'Situação', sortable: true },
          { key: 'registry', label: 'Tombo', sortable: true }
        ],
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
