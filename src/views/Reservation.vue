<template lang="html">
  <div>
    <h2>RESERVAS</h2>
    <DataTable endpoint='/reservations' :config='config'/>
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
          { key: 'description', label: 'Descrição' },
          { key: 'date_start', label: 'Início', sortable: true },
          { key: 'date_end', label: 'Fim', sortable: true },
          { key: 'user_id', label: 'Usuário', sortable: true },
          { key: 'thirdparty_id', label: 'Terceiro', sortable: true }
        ],
        foreign_keys: [
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
          'date_start', 'date_end'
        ],
        history: {
          show: true,
          status: false,
          options: [
            { text: 'Abertas', value: false },
            { text: 'Todas', value: true }
          ]
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
