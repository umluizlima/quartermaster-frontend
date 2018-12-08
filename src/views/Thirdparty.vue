<template lang="html">
  <div>
    <h2>TERCEIROS</h2>
    <DataTable endpoint='/thirdparties' :config='config'/>
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
          { key: 'first_name', label: 'Nome', sortable: true },
          { key: 'last_name', label: 'Sobrenome', sortable: true },
          { key: 'email', label: 'E-mail', sortable: true },
          { key: 'phone', label: 'Telefone', sortable: true }
        ]
      }
    }
  }
}
</script>

<style lang="css">
</style>
