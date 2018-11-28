<template lang="html">
  <div id="accountView">
    <h1>CONTA</h1>
    <h2>Alterar minha senha</h2>
    <PasswordForm/>
  </div>
</template>

<script>
import PasswordForm from '@/components/forms/PasswordForm.vue'

export default {
  components: {
    PasswordForm
  }
}
</script>

<style lang="css">
#accountView {
  width: 100%;
  padding: 10pt;
}

@media screen and (min-width: 800px) {
  #accountView {
    max-width: 50%;
  }
}

.btn {
  width: 100%;
}
</style>
