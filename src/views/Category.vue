<template lang="html">
  <DataTable endpoint='/categories' :config='config'/>
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
        columns: ['name', 'description'],
        options: {
          headings: {
            name: 'Nome',
            description: 'Descrição'
          }
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
