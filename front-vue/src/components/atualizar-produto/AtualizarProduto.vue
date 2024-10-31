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
      <div class="bg-teal-600 w-full">
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
          
          
          <form @submit.prevent="updateProduto" class="flex flex-col gap-3 bg-white rounded-lg p-3 shadow-shape mx-2">
            <h2 class="font-semibold text-xl w-full text-center text-teal-900">Alterar produto</h2>
  
            <fieldset class="flex flex-col">
              <label for="descricao">Nova descrição</label>
              <input v-model="editProdutoForm.descricao" class="bg-gray-100 border-solid border-2 rounded-sm placeholder-slate-500 text-xs py-1.5 px-2" type="text" name="descricao" placeholder="Descrição do produto..." required>
            </fieldset>
            
            <fieldset class="flex flex-col">
              <label for="marca">Nova marca</label>
              <input v-model="editProdutoForm.marca" class="bg-gray-100 border-solid border-2 rounded-sm placeholder-slate-500 text-xs py-1.5 px-2" type="text" name="marca" placeholder="Marca do produto..." required>
            </fieldset>
    
            <div class="flex gap-3 justify-between flex-wrap min-w-[230px]">
  
              <fieldset class="flex flex-col flex-1">
                <label for="valor">Novo valor</label>
                <input v-model="editProdutoForm.valor" class="bg-gray-100 border-solid border-2 rounded-sm placeholder-slate-500 text-xs py-1.5 px-2" type="number" name="valor" placeholder="R$0.00" required>
              </fieldset>
              
              <fieldset class="flex flex-col flex-1">
                <label for="quantidade">Nova quantidade</label>
                <input v-model="editProdutoForm.quantidade" class="bg-gray-100 border-solid border-2 rounded-sm text-xs py-1.5 px-2" type="number" name="quantidade" value="0" required><br>
              </fieldset>
            </div>
  
            <div class="flex gap-4 justify-between">
              
              <a class="bg-orange-600 hover:bg-orange-700 transition-all delay-75 px-3 py-1 rounded-lg text-white font-semibold flex-1 text-center flex gap-1 justify-center items-center max-w-28" href="/produto/visualizar"><Undo2 class="w-4 h-4 text-white"/>Voltar</a>
  
              <button class="bg-teal-600 hover:bg-teal-700 cursor-pointer transition-all delay-75 px-3 py-1 rounded-lg text-white font-semibold flex-1 max-w-32 flex justify-center items-center gap-1" type="submit"><Check class="w-4 h-4 text-white"/>Confirmar</button>
              
            </div>
            
        </form>
  
      </div>
    </div>
    </main>
  </template>
  
  <script>
  import { House, CirclePlus, LayoutList, Undo2, Check } from 'lucide-vue-next';
  import api from '../../services/api';
  
  
  export default {
  name: 'AtualizarProduto',
  components: {
    House,
    CirclePlus,
    LayoutList,
    Undo2,
    Check,
  },data() {
      return {
      produtos: [],
      newProduto: {
      id: '',
      descricao: '',
      marca: '',
      valor: '',
      quantidade: '',
      },
      editProdutoForm: {
        id: '',
        descricao: '',
        marca: '',
        valor: '',
        quantidade: '',
      },
      };
    },
    methods: {
  async fetchProdutos() {
    try {
      const response = await api.get('/produto/visualizar');
      this.produtos = response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  },
  
  async updateProduto() {
    try {
      await api.put(`/produto/editar/${this.editProdutoForm.id}`, this.editProdutoForm);
      this.$router.push('/produto/visualizar'); 
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  },

  async deleteProduto(id) {
    try {
      await api.delete(`/produto/excluir/${id}`);
      this.fetchProdutos();
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  }
},

  created() {
  this.fetchProdutos();
    },
  };
  </script>
  