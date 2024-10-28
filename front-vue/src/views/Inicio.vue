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
      <main class="pl-14">
        <div class="mx-20 py-10 flex flex-row justify-center max-w-5xl gap-14">
          <div class="space-y-3 w-[40%]">
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
        <aside class="bg-teal-600 px-6 rounded py-4">
          <h1 class="text-lg font-bold text-white">Tecnologias</h1>
          <ul class="flex flex-col gap-4 my-4 text-white h-full">
            <li>Node.JS <img src="/nodejs.svg" alt="" width="70"></li>
            <li>Express.JS <img src="/expressjs.svg" width="30" alt=""></li>
            <li>Vue.JS <img src="/vuejs.svg" width="40" alt=""></li>
            <li>Tailwind.CSS <img src="/tailwindcss.svg" width="40" alt=""></li>
          </ul>
        </aside>
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
  