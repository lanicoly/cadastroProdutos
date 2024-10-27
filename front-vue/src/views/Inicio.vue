<template>
    <div>
      <h1>Boas vindas à página inicial!</h1>
      <p>Lojinha</p>
      <router-link to="/produto/criar">Criar novo produto</router-link>
      <router-link to="/produto/visualizar">Ver todos os produtos</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Inicio',
  };
  </script>
  
  