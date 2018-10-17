<template lang="html">
  <b-card title="Entrar"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          align="center">
    <LoginForm/>
  </b-card>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm.vue'

export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="css">
.card {
  width: 50%;
}

.card > * {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 0;
  padding-right: 0;
}

.btn {
  width: 100%;
}
</style>
