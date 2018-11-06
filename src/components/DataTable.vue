<template lang="html">
    <v-client-table class="datatable" :data="data" :columns="columns" :options="options">
      <!-- Botão para adicionar novos objetos -->
      <b-btn class="addBtn"
             slot="beforeTable"
             variant="success"
             v-b-modal.createModal>Adicionar</b-btn>

      <!-- Substitui valores booleanos por textos específicos -->
      <div v-for="b in bools" :slot="b.column" slot-scope="props">
        <p v-if="props.row[b.column]">{{ b.isTrue }}</p>
        <p v-else>{{ b.isFalse }}</p>
      </div>

      <!-- Formata datetimes vindos do backend em formato ISO para o formato desejado -->
      <div v-for="dt in datetimes" :slot="dt" slot-scope="props">
        <p v-if="props.row[dt] != null">{{ moment(props.row[dt]).locale('pt-BR').format("DD/MM/YY - HH:mm") }}</p>
      </div>

      <!-- Ações de editar e apagar em cada item da tabela -->
      <b-btn-group class="actions" slot="actions" slot-scope="props">
        <b-btn v-b-modal.editModal
               variant="warning"
               @click="objectId = props.row.id">Editar</b-btn>

        <b-btn variant="danger"
               v-b-modal.deleteModal
               @click="objectId = props.row.id">Apagar</b-btn>
      </b-btn-group>

      <!-- Seletor para alternar entre itens atuais ou histórico completo, onde aplicável -->
      <b-form-radio-group v-if="history.show"
                          slot="afterTable"
                          v-model="history.status"
                          buttons
                          button-variant="outline-primary"
                          :options="history.options"
                          @input="getData"
                          required/>

      <!-- Modais que são mostrados quando seus respectivos botões são apertados -->
      <div class="modals" slot="afterTable">
        <CreateModal :resource="api.resource"
                     @ok="getData"/>

        <EditModal :resource="api.resource"
                   :id="objectId"
                   @ok="getData"/>

        <DeleteModal :resource="api.resource"
                     :id="objectId"
                     @ok="getData"/>
      </div>
    </v-client-table>
</template>

<script>
import { API } from '@/utils/api'
import CreateModal from '@/components/modals/CreateModal.vue'
import EditModal from '@/components/modals/EditModal.vue'
import DeleteModal from '@/components/modals/DeleteModal.vue'

const conf = {
  perPage: 5,
  perPageValues: [5, 10, 25],
  texts: {
    count: 'De {from} até {to} dos {count} resultados|{count} resultados|1 resultado',
    filter: '',
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
      datetimes: this.config.datetimes || [],
      history: this.config.history || {},
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
    CreateModal,
    EditModal,
    DeleteModal
  },
  methods: {
    getData () {
      this.data = []
      console.log(this.history.status)
      let request = null
      if (this.history.status) {
        request = this.api.getAll()
      } else {
        request = this.api.get()
      }
      request
        .then((resp) => {
          this.getForeignData(resp.data, this.config.foreign_keys)
          this.data = resp.data
        })
      this.objectId = 0
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
  }
}
</script>

<style lang="css">
.datatable {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 800px) {
  .datatable {
    max-width: 80%;
  }
}
</style>
