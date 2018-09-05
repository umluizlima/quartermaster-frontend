<template lang="html">
  <DataTable endpoint='/users' :config='config'/>
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
        columns: ['first_name', 'last_name', 'email', 'admin'],
        options: {
          headings: {
            first_name: 'Nome',
            last_name: 'Sobrenome',
            email: 'E-mail',
            admin: 'Função'
          }
        },
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
