<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/categorias">Categorias</router-link> |
      <router-link to="/itens">Itens</router-link> |
      <router-link to="/terceiros">Terceiros</router-link> |
      <router-link to="/usuarios">Usuários</router-link> |
      <router-link to="/emprestimos">Empréstimos</router-link> |
      <router-link to="/reservas">Reservas</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
