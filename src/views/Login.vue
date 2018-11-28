<template lang="html">
  <div class="login">
    <h2>Entrar</h2>
    <LoginForm/>
  </div>
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
.login {
  width: 100%;
  padding: 10pt;
}

@media screen and (min-width: 800px) {
  .login {
    max-width: 50%;
  }
}

.btn {
  width: 100%;
}
</style>
