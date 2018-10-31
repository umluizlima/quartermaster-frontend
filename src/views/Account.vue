<template lang="html">
  <div id="accountView">
    <h1>Conta</h1>
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
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#accountView > * {
  width: 100%;
}
</style>
