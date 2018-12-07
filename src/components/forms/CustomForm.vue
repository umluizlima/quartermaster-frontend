<template lang="html">
  <b-form @submit.prevent="handleSubmit"
          @reset="clearForm">

    <CategoryFields v-if="resource=='/categories'"
                    :obj="form"/>

    <ItemFields v-else-if="resource=='/items'"
                :obj="form"/>

    <UserFields v-else-if="resource=='/users'"
                :obj="form"/>

    <ThirdpartyFields v-else-if="resource=='/thirdparties'"
                      :obj="form"/>

    <LendingFields v-else-if="resource=='/lendings'"
                   :obj="form"/>

    <ReservationFields v-else-if="resource=='/reservations'"
                       :obj="form"/>

    <div id="formButtons">
      <b-button v-if="objectId" type="submit" variant="warning">Confirmar</b-button>
      <b-button v-else type="submit" variant="success">Confirmar</b-button>
      <b-button v-if="Object.keys(form) != 0"type="reset" variant="danger">Limpar</b-button>
    </div>
  </b-form>
</template>

<script>
import { API } from '@/utils/api'
import CategoryFields from '@/components/forms/fields/CategoryFields.vue'
import ItemFields from '@/components/forms/fields/ItemFields.vue'
import UserFields from '@/components/forms/fields/UserFields.vue'
import ThirdpartyFields from '@/components/forms/fields/ThirdpartyFields.vue'
import ReservationFields from '@/components/forms/fields/ReservationFields.vue'
import LendingFields from '@/components/forms/fields/LendingFields.vue'

export default {
  name: 'CustomForm',
  components: {
    CategoryFields,
    ItemFields,
    UserFields,
    ThirdpartyFields,
    ReservationFields,
    LendingFields
  },
  props: {
    resource: {
      type: String,
      required: true
    },
    objectId: {
      type: Number,
      required: false
    }
  },
  data () {
    return {
      api: new API(this.resource),
      form: {}
    }
  },
  watch: {
    objectId: function () {
      if (this.objectId !== 0) {
        this.api.getOne(this.objectId)
          .then((resp) => {
            this.form = resp.data
          })
          .catch((err) => {
            if (err.response.status === 404) {
              this.$store.commit('setError', err.response.data.message)
            }
          })
      }
    }
  },
  methods: {
    handleSubmit () {
      let data = {}
      let object = this.form
      for (var variable in object) {
        if (object.hasOwnProperty(variable) && variable !== 'id') {
          if (object[variable] === '') {
            data[variable] = null
          } else {
            data[variable] = object[variable]            
          }
        }
      }
      this.$emit('submitted', data)
    },
    clearForm () {
      let object = this.form
      for (var variable in object) {
        if (object.hasOwnProperty(variable)) {
          object[variable] = null
        }
      }
    }
  }
}
</script>

<style lang="css">
#formButtons {
  display: flex;
}

#formButtons > button + button {
  margin-left: 10px;
}
</style>
