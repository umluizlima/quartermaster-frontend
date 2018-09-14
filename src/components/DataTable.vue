<template lang="html">
  <div class="">
    <v-client-table :data="data" :columns="columns" :options="options">
      <!-- <b-btn slot="beforeTable" variant="success" @click="createObject()">Adicionar</b-btn> -->
      <!-- <b-btn v-b-modal.createModal
             slot="beforeTable"
             variant="success">Adicionar</b-btn> -->

      <div v-for="b in bools" :slot="b.column" slot-scope="props">
        <p v-if="props.row[b.column]">{{ b.isTrue }}</p>
        <p v-else>{{ b.isFalse }}</p>
      </div>

      <b-btn-group slot="actions" slot-scope="props">
        <!-- <b-btn variant="warning" @click="editObject(props.row.id)">Editar {{ props.row.id }}</b-btn> -->
        <b-btn variant="danger" v-b-modal.deleteModal @click="objectId = props.row.id">Apagar {{ props.row.id }}</b-btn>
        <!-- <DeleteModal :id="props.row.id" :api="api"/> -->
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
                 @ok="getData"/> -->

    <DeleteModal :id="objectId"
                 :api="api"
                 @ok="getData"/>
  </div>
</template>

<script>
import API from '@/utils/api'
import DeleteModal from '@/components/modals/DeleteModal.vue'

const conf = {
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
      options: {},
      columns: [],
      bools: this.config.bools || [],
      objectId: 0
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
  components: {
    DeleteModal,
  },
  methods: {
    getData () {
      this.data = []
      this.api.get()
        .then((resp) => {
          this.getForeignData(resp.data, this.config.foreign_keys)
          this.data = resp.data
        })
    },
    getForeignData (data = [], foreignKeys = []) {
      for (let key of foreignKeys) {
        var api = new API(key.endpoint)
        api.get()
          .then((resp) => {
            for (let row of data) {
              if (row[key.column] != undefined) {
                row[key.column] = resp.data.find(x => x.id === row[key.column])[key.attribute]
              }
            }
          })
      }
    }
  },
  mounted () {
    this.columns = this.config.columns.concat(['actions'])
    this.config.options.headings.actions = ''
    this.options = Object.assign(this.config.options, conf)
    this.getData()
  },
  updated () {
    console.log(`objectId atual ${this.objectId}`)
  }
}
</script>

<style lang="css">
</style>
