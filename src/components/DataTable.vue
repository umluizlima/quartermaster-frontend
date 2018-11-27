<template lang="html">
  <b-container fluid>
    <!-- Cabeçalho -->
    <b-row>
      <!-- Filtragem -->
      <b-col md="9" class="my-1">
        <b-form-group horizontal label="Filtrar" class="mb-0">
          <b-form-input v-model="filter" placeholder="Digite para filtrar os resultados"/>
        </b-form-group>
      </b-col>

      <!-- Recarregar resultados -->
      <b-col md="3" class="my-1">
        <b-btn variant="primary" @click="getData">Recarregar</b-btn>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="12" class="my-1">
        <b-btn variant="success" v-b-modal.createModal>Adicionar</b-btn>
      </b-col>
    </b-row>

    <!-- Tabela -->
    <b-table responsive
             show-empty
             empty-text="Sem resultados..."
             empty-filtered-text="Pesquisa sem resultados..."
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :sort-direction="sortDirection"
             @filtered="onFiltered">

      <!-- Substitui valores booleanos por textos específicos -->
      <template v-for="b in bools" :slot="b.column" slot-scope="row">
        {{ row.value?`${b.isTrue}`:`${b.isFalse}` }}
      </template>

      <!-- Formata datetimes de formato ISO para o desejado -->
      <template v-for="dt in datetimes" :slot="dt" slot-scope="row">
        {{ row.value?`${moment(row.value).locale('pt-BR').format("DD/MM/YY - HH:mm")}`:'-' }}
      </template>

      <!-- Coluna de ações -->
      <template slot="actions" slot-scope="row">
        <b-btn-group>
          <b-btn v-b-modal.editModal
                 variant="warning"
                 @click="objectId = row.item.id">Editar</b-btn>

          <b-btn variant="danger"
                 v-b-modal.deleteModal
                 @click="objectId = row.item.id">Apagar</b-btn>
        </b-btn-group>
      </template>
    </b-table>

    <!-- Rodapé -->
    <b-row>

      <!-- Paginação -->
      <b-col md="4" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>

      <!-- Seletor para alternar entre itens atuais ou histórico completo, onde aplicável -->
      <b-col md="4" class="my-1">
        <b-form-radio-group v-if="history.show"
                            v-model="history.status"
                            buttons
                            button-variant="outline-primary"
                            :options="history.options"
                            @input="getData"
                            required/>
      </b-col>

      <!-- Resultados por página -->
      <b-col md="4" class="my-1">
        <b-form-group horizontal label="Por página" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Modal de criação -->
    <CreateModal :resource="api.resource"
                 @ok="getData"/>

    <!-- Modal de edição -->
    <EditModal :resource="api.resource"
               :id="objectId"
               @ok="getData"/>

    <!-- Modal de exclusão -->
    <DeleteModal :resource="api.resource"
                 :id="objectId"
                 @ok="getData"/>

  </b-container>
</template>

<script>
import { API } from '@/utils/api'
import CreateModal from '@/components/modals/CreateModal.vue'
import EditModal from '@/components/modals/EditModal.vue'
import DeleteModal from '@/components/modals/DeleteModal.vue'

export default {
  name: 'DataTable',
  data () {
    return {
      api: new API(this.endpoint),
      items: [],
      fields: this.config.columns.concat(
        { key: 'actions', label: '' }
      ),
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      objectId: 0,
      bools: this.config.bools || [],
      datetimes: this.config.datetimes || [],
      history: this.config.history || {}
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
      this.items = []
      let request = null
      if (this.history.status) {
        request = this.api.getAll()
      } else {
        request = this.api.get()
      }
      request
        .then((resp) => {
          this.getForeignData(resp.data, this.config.foreign_keys)
          this.items = resp.data
          this.totalRows = resp.data.length
        })
      this.objectId = 0
    },
    getForeignData (data = [], foreignKeys = []) {
      for (let key of foreignKeys) {
        var api = new API(key.endpoint)
        let request = null
        if (key.all == true) {
          request = api.getAll()
        } else {
          request = api.get()
        }
        request
          .then((resp) => {
            for (let row of data) {
              if (row[key.column] != undefined) {
                row[key.column] = resp.data.find(x => x.id === row[key.column])[key.attribute]
              }
            }
          })
      }
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="css">
</style>
