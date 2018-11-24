<template lang="html">
  <DataTable endpoint='/reservations' :config='config'/>
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
        columns: ['name', 'description', 'date_start', 'date_end', 'user_id', 'thirdparty_id'],
        options: {
          headings: {
            name: 'Nome',
            description: 'Descrição',
            date_start: 'Início',
            date_end: 'Fim',
            user_id: 'Usuário',
            thirdparty_id: 'Terceiro'
          }
        },
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
