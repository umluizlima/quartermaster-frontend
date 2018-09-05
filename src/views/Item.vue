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
        columns: ['name', 'description', 'available', 'registry', 'actions'],
        options: {
          headings: {
            name: 'Nome',
            description: 'Descrição',
            available: 'Disponível',
            registry: 'Tombo',
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
