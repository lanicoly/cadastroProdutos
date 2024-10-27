<template>
  <div id="app">
    <header>
      <h1>Projeto da Laís</h1>
      <nav>
        <router-link to="/">Inicio</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
