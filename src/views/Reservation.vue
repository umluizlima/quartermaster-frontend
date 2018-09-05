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
        columns: ['name', 'description', 'date_start', 'date_end', 'user_id', 'thirdparty_id', 'actions'],
        options: {
          headings: {
            name: 'Nome',
            description: 'Descrição',
            date_start: 'Início',
            date_end: 'Fim',
            user_id: 'Usuário',
            thirdparty_id: 'Terceiro',
            actions: ''
          }
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
