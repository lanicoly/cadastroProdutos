<template>
  <div id="app">
    <main>
      <router-view></router-view>
      <!-- <ListarProduto/> -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  // components: {
  //   ListarProduto,
  // },
};

import axios from "axios";
import {ref} from "vue";
import ListarProduto from "./components/listar-produto/ListarProduto.vue";

const produto = ref()

axios.get('/produto/visualizar')
.then ((res) => {
  produto.value = res.data
})

function updateProduto(produto) {
  const data = {
    descricao: produto.descricao,
    valor: produto.valor,
    marca: produto.marca,
    quantidade: produto.quantidade
    
  }
    axios.post(`/produto/editar/${produto.id}`, data)
    .then((res) => {
      produto.descricao = res.data.descricao,
      produto.valor = res.data.valor,
      produto.marca = res.data.marca,
      produto.quantidade = res.data.quantidade

    })
}
</script>
