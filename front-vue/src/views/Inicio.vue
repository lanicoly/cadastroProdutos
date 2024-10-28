<template>
      <nav class="flex flex-col justify-center items-center h-full fixed left-0 bg-orange-700">
        <div class="bg-teal-600 w-full">
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
      <main class="flex justify-center items-center flex-col pl-4 md:pl-14">
        <div class="mx-20 py-10 flex md:flex-row flex-col justify-center max-w-5xl gap-14">
          <div class="space-y-3 w-full md:w-[40%]">
            <h1 class="font-bold font-raleway text-2xl text-teal-600"><strong class="font-bold text-2xl text-orange-700">Prod</strong>Manager</h1>
            
            <p class="text-left">
              Explore um universo de produtos de maneira simples e eficiente! O <strong>ProdManager</strong> foi desenvolvido para facilitar o gerenciamento do seu estoque, oferecendo uma interface amigável e um design retro que traz uma sensação nostálgica ao seu dia a dia.
            </p>
            
            <p>
            Aqui, você pode:
          </p>
          <ul class="list-disc pl-5 decoration-orange-600">
            <li><strong>Criar</strong> novos produtos com facilidade, adicionando detalhes como descrição, marca, quantidade e preço.</li>
            <li><strong>Visualizar</strong> todos os produtos cadastrados de maneira organizada e intuitiva.</li>
            <li><strong>Manter</strong> seus dados sempre atualizados, editando ou removendo produtos conforme necessário.</li>
          </ul>
  
        </div>
        <aside class="bg-teal-600 px-6 rounded py-4 w-full md:w-auto">
          <h1 class="text-lg font-bold text-white text-center">Tecnologias</h1>
          <ul class="flex md:flex-col mobile:flex-row flex-col md:justify-start justify-center items-center gap-4 my-4 text-white h-full">
            <li>Node.JS <img src="/nodejs.svg" alt="" width="70"></li>
            <li>Express.JS <img src="/expressjs.svg" width="30" alt=""></li>
            <li>Vue.JS <img src="/vuejs.svg" width="40" alt=""></li>
            <li>Tailwind.CSS <img src="/tailwindcss.svg" width="40" alt=""></li>
          </ul>
        </aside>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-md text-center flex flex-col md:flex-row gap-4 mr-4 ml-10">
  <img src="/lais2024.png" alt="Laís Nicoly" class="w-24 h-24 rounded-full mb-2 mx-auto" />
  <div class="flex flex-col justify-center items-start text-left">
    <h4 class="text-teal-900 font-semibold">Aluna</h4>
    <h4 class="text-teal-900">Laís Nicoly</h4>
    <p>
      Programação Web II - TADS IV - Prof. Ronaldo
    </p>
  </div>
</div>

      </main>
  </template>
  
  <script>
  import { House, CirclePlus, LayoutList } from 'lucide-vue-next';
  
  export default {
    name: 'Inicio',
    components: {
      House,
      CirclePlus,
      LayoutList,
    },
  };
  </script>
  