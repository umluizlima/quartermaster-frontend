<template>
  <div class="home">
    <h1>Ações rápidas</h1>
    <p>Alguém precisa reservar a sala de treinamentos, pegar ou devolver algum material?</p>
    <h3>Já tem cadastro?</h3>
    <b-btn to="/cadastrar-pessoa" size="lg" variant="success">Cadastrar Pessoa</b-btn>
    <h3>Do que precisa?</h3>
    <b-button-group size="lg" vertical v-if="$store.getters.isLoggedIn">
      <b-btn to="/emprestar" variant="warning">Emprestar Item</b-btn>
      <b-btn to="/devolver" variant="success">Devolver Item</b-btn>
      <b-btn to="/reservar" variant="primary">Reservar Sala de Treinamentos</b-btn>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="css">
.home {
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.home > * {
  width: 100%;
}
</style>
