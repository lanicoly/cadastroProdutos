<template>
    <nav class="flex flex-col justify-center items-center h-full fixed left-0 bg-orange-700">
      <div class="hover:bg-teal-500 w-full">
      <router-link to="/">
          <House class="w-6 h-6 text-white mx-3 my-2" />
        </router-link>
      </div>
      <div class="bg-teal-600 w-full">
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
    <main class="pl-12">
      <div class="py-10 flex flex-row justify-center gap-14">
        <div class="space-y-3 min-w-[40%]">
          <div class="w-full text-center">
            <h1 class="font-bold font-raleway text-2xl text-teal-600"><strong class="font-bold text-2xl text-orange-700">Prod</strong>Manager</h1>
          </div>
          
          
          <form action="/produto/criar" method="POST" class="flex flex-col gap-3 bg-white rounded-lg p-3 shadow-shape">
            <h2 class="font-semibold text-xl w-full text-center text-teal-900">Criar novo produto</h2>

            <fieldset class="flex flex-col">
              <label for="descricao">Informe a descrição</label>
              <input class="bg-gray-100 border-solid border-2 rounded-sm placeholder-slate-500 text-xs py-1.5 px-2" type="text" name="descricao" placeholder="Descrição do produto..." required>
            </fieldset>
            
            <fieldset class="flex flex-col">
              <label for="marca">Informe a marca</label>
              <input class="bg-gray-100 border-solid border-2 rounded-sm placeholder-slate-500 text-xs py-1.5 px-2" type="text" name="marca" placeholder="Marca do produto..." required>
            </fieldset>
    
            <div class="flex gap-3 justify-between">

              <fieldset class="flex flex-col flex-1">
                <label for="valor">Informe o valor</label>
                <input class="bg-gray-100 border-solid border-2 rounded-sm placeholder-slate-500 text-xs py-1.5 px-2" type="number" name="valor" placeholder="R$0.00" required>
              </fieldset>
              
              <fieldset class="flex flex-col flex-1">
                <label for="quantidade">Informe a quantidade</label>
                <input class="bg-gray-100 border-solid border-2 rounded-sm text-xs py-1.5 px-2" type="number" name="quantidade" value="0" required><br>
              </fieldset>
            </div>
            
              <input class="bg-teal-600 hover:bg-orange-600 cursor-pointer transition-all delay-75 px-3 py-1 rounded-lg text-white font-semibold" type="submit" value="Confirmar">
            
        </form>

      </div>
    </div>
    </main>
</template>

<script>
import { House, CirclePlus, LayoutList } from 'lucide-vue-next';

export default {
  name: 'CriarProduto',
  components: {
    House,
    CirclePlus,
    LayoutList,
  },
};
</script>
