<template lang="html">
  <b-alert variant="danger"
           dismissible
           :show="!!$store.getters.error"
           @dismissed="$store.commit('clearError')">
     {{ this.$store.getters.error }}
   </b-alert>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
