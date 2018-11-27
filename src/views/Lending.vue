<template lang="html">
  <div>
    <h2>EMPRÉSTIMOS</h2>
    <DataTable endpoint='/lendings' :config='config'/>
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
          { key: 'item_id', label: 'Item', sortable: true },
          { key: 'date_start', label: 'Início', sortable: true },
          { key: 'date_end', label: 'Fim', sortable: true },
          { key: 'date_return', label: 'Devolução', sortable: true },
          { key: 'user_id', label: 'Usuário', sortable: true },
          { key: 'thirdparty_id', label: 'Terceiro', sortable: true }
        ],
        foreign_keys: [
          {
            column: 'item_id',
            endpoint: '/items',
            attribute: 'name',
            all: true
          },
          {
            column: 'user_id',
            endpoint: '/users',
            attribute: 'email'
          },
          {
            column: 'thirdparty_id',
            endpoint: '/thirdparties',
            attribute: 'email'
          }
        ],
        datetimes: [
          'date_start', 'date_end', 'date_return'
        ],
        history: {
          show: true,
          status: false,
          options: [
            { text: 'A devolver', value: false },
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
