<template lang="html">
  <div id="navbar">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand>CDG Hub</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav v-if="$store.getters.isLoggedIn" >
          <b-nav-item to="/">INÍCIO</b-nav-item>
          <b-nav-item-dropdown text="VISUALIZAR" left>
            <b-dropdown-item to="/categorias">Categorias</b-dropdown-item>
            <b-dropdown-item to="/itens">Itens</b-dropdown-item>
            <b-dropdown-item to="/terceiros">Terceiros</b-dropdown-item>
            <b-dropdown-item to="/emprestimos">Empréstimos</b-dropdown-item>
            <b-dropdown-item to="/reservas">Reservas</b-dropdown-item>
            <b-dropdown-item v-if="$store.getters.isAdmin" to="/usuarios">Usuários</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="$store.getters.isLoggedIn" right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>{{ $store.getters.user.first_name }} {{ $store.getters.user.last_name }}</em>
            </template>
            <b-dropdown-item to="/conta">Minha conta</b-dropdown-item>
            <b-dropdown-item to="/sair">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav v-else>
            <b-nav-item to="/entrar">Entrar</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="css">
#navbar {
  width: 100%;
}
</style>
