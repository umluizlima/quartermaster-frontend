<template lang="html">
  <div>
    <h2>CATEGORIAS</h2>
    <DataTable endpoint='/categories' :config='config'/>
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
        // columns: ['name', 'description'],
        columns: [
          { key: 'name', label: 'Nome', sortable: true },
          { key: 'description', label: 'Descrição', sortable: true }
        ],
        // options: {
        //   headings: {
        //     name: 'Nome',
        //     description: 'Descrição'
        //   }
        // }
      }
    }
  }
}
</script>

<style lang="css">
</style>
