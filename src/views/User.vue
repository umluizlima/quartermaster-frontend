<template lang="html">
  <div>
    <h2>USUÁRIOS</h2>
    <DataTable endpoint='/users' :config='config'/>
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
          { key: 'admin', label: 'Função', sortable: true }
        ],
        bools: [
          {
            column: 'admin',
            isTrue: 'Administrador',
            isFalse: 'Usuário'
          }
        ]
      }
    }
  }
}
</script>

<style lang="css">
</style>
