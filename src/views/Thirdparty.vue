<template lang="html">
  <DataTable endpoint='/thirdparties' :config='config'/>
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
        columns: ['first_name', 'last_name', 'email', 'actions'],
        options: {
          headings: {
            first_name: 'Nome',
            last_name: 'Sobrenome',
            email: 'E-mail',
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
