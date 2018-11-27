<template>
  <div class="home">
    <h2>AÇÕES RÁPIDAS</h2>
    <p>Atenda rapidamente alguém que precise reservar a sala de treinamentos, pegar ou devolver algum material.</p>
    <div class="options">
      <h3>JÁ TEM CADASTRO?</h3>
      <b-btn to="/cadastrar-pessoa" size="lg" variant="success">CADASTRAR PESSOA</b-btn>
      <h3>DO QUE PRECISA?</h3>
      <b-btn to="/emprestar" size="lg" variant="warning">EMPRESTAR ITEM</b-btn>
      <b-btn to="/devolver" size="lg" variant="success">DEVOLVER ITEM</b-btn>
      <b-btn to="/reservar" size="lg" variant="primary">RESERVAR SALA</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="css">
.home {
  width: 90%;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 800px) {
  .home {
    width: 50%;
  }
}

.home > * {
  width: 100%;
}

.options {
  text-align: center;
}

.options > * {
  margin-top: 10px;
}
</style>
