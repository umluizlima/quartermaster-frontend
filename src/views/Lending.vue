<template lang="html">
  <DataTable endpoint='/lendings' :config='config'/>
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
        columns: ['item_id', 'date_start', 'date_end', 'date_return', 'user_id', 'thirdparty_id', 'actions'],
        options: {
          headings: {
            item_id: 'Item',
            date_start: 'Início',
            date_end: 'Fim',
            date_return: 'Devolução',
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
