<template lang="html">
  <div class="">
    <v-client-table :data="data" :columns="columns" :options="options">
      <b-btn slot="beforeTable" variant="success">Adicionar</b-btn>
      <!-- <b-btn v-b-modal.createModal
             slot="beforeTable"
             variant="success">Adicionar</b-btn> -->

      <b-btn-group class="actions" slot="actions" slot-scope="props">
        <b-btn variant="warning">Editar {{ props.row.id }}</b-btn>
        <b-btn variant="danger">Apagar</b-btn>
        <!-- <b-btn v-b-modal.updateModal
               variant="warning"
               @click.prevent="objectId = props.row.id">Editar</b-btn>

        <b-btn v-b-modal.deleteModal
               variant="danger"
               @click.prevent="objectId = props.row.id">Apagar</b-btn> -->
      </b-btn-group>
    </v-client-table>

    <!-- <CreateModal :api="api"
                 @ok="getData"/>

    <UpdateModal :id="objectId"
                 :api="api"
                 @ok="getData"/>

    <DeleteModal :id="objectId"
                 :api="api"
                 @ok="getData"/> -->
  </div>
</template>

<script>
import API from '@/utils/api'

const conf = {
  headings: {
    actions: ''
  },
  perPage: 5,
  perPageValues: [5, 10, 25],
  texts: {
    count: 'De {from} até {to} dos {count} resultados|{count} resultados|1 resultado',
    filter: 'Pesquisar:',
    filterPlaceholder: 'Pesquisar...',
    limit: 'Resultados por página:',
    noResults: 'Sem resultados...'
  }
}

export default {
  name: 'DataTable',
  data () {
    return {
      api: new API(this.endpoint),
      data: [],
      options: Object.assign(this.config.options, conf),
      columns: this.config.columns.concat(['actions'])
    }
  },
  props: {
    endpoint: {
      type: String,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  },
  methods: {
    getData () {
      this.data = []
      this.api.get()
        .then((resp) => {
          this.data = resp.data
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="css">
</style>
