<template>
  <nav class="flex flex-col justify-center items-center h-full fixed left-0 bg-orange-700">
    <div class="hover:bg-teal-500 w-full">
      <router-link to="/">
        <House class="w-6 h-6 text-white mx-3 my-2" />
      </router-link>
    </div>
    <div class="hover:bg-teal-500 w-full">
      <router-link to="/produto/novo">
        <CirclePlus class="w-6 h-6 text-white mx-3 my-2" />
      </router-link>
    </div>
    <div class="hover:bg-teal-500 w-full">
      <router-link to="/produto/visualizar">
        <LayoutList class="w-6 h-6 text-white mx-3 my-2" />
      </router-link>
    </div>
  </nav>
  
  <main class="ml-14 flex justify-center items-center h-screen">
    <div class="container flex flex-col gap-4 w-full h-auto p-6 rounded-lg bg-white shadow-md mx-5 max-w-[400px] justify-center items-center">
      <div class="flex justify-center mx-auto w-full max-w-[90%]">
        <p class="text-teal-900 text-center text-2xl font-semibold w-[85%] h-max">
          404 - Página Não Encontrada
        </p>
      </div>
      <CircleX class="w-16 h-16 text-red-700 mx-auto" />

      <p class="text-center text-teal-600">
        Desculpe, a página que você está procurando não existe.
      </p>
      <router-link to="/" class="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-center">
        Voltar para a Página Inicial
      </router-link>
    </div>
  </main>
</template>
  
  <script>

import { House, CirclePlus, LayoutList, CircleX } from 'lucide-vue-next';

  export default {
    name: 'NotFound',
    components: {
      House,
      CirclePlus,
      LayoutList,
      CircleX,
    },
  };
  </script>
  
  