<template lang="html">
  <div class="login">
    <h2>Entrar</h2>
    <LoginForm/>
    <p>Quer pegar um item emprestado ou reservar a sala de treinamentos pela primeira vez? Cadastre-se <router-link :to="{ name: 'newPerson' }">aqui</router-link></p>

    <p>Consulte a agenda de reservas <router-link :to="{ name: 'calendar' }">aqui</router-link></p>
  </div>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm.vue'

export default {
  name: 'login',
  components: {
    LoginForm
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
  watch: {
    isLoggedIn (val) {
      if (val) {
        this.$router.push({ name: 'home' })
      }
    }
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
