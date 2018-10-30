<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">CDG Hub</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav v-if="$store.getters.isLoggedIn">
          <!-- <b-nav-item to="/">Início</b-nav-item> -->
          <b-nav-item to="/categorias">Categorias</b-nav-item>
          <b-nav-item to="/itens">Itens</b-nav-item>
          <b-nav-item to="/terceiros">Terceiros</b-nav-item>
          <b-nav-item to="/emprestimos">Empréstimos</b-nav-item>
          <b-nav-item to="/reservas">Reservas</b-nav-item>
          <b-nav-item v-if="$store.getters.isAdmin" to="/usuarios">Usuários</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="$store.getters.isLoggedIn" right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>{{ $store.getters.user.first_name }}</em>
            </template>
            <b-dropdown-item href="#">Configurações</b-dropdown-item>
            <b-dropdown-item to="/sair">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav v-else>
            <b-nav-item to="/entrar">Entrar</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  /* min-height: 100vh; */
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}

.navbar {
  width: 100%;
}

.navbar + * {
  width: 100%;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 800px) {
  .navbar + * {
    max-width: 80%;
  }
}
</style>
