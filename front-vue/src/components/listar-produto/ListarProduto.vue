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
  <main class="pl-14">
    <div class="py-10 flex flex-row justify-center gap-14">
      <div class="space-y-3 min-w-[40%]">
        <div class="w-full text-center">
          <h1 class="font-bold font-raleway text-2xl text-teal-600"><strong
              class="font-bold text-2xl text-orange-700">Prod</strong>Manager</h1>
        </div>

        <h2 class="font-semibold text-xl w-full text-center text-teal-900">Produtos Cadastrados</h2>

        <div class="flex flex-wrap max-w-[820px] justify-center gap-4 mx-2">

          <!-- card -->
          <div class="space-y-2 w-48 bg-white rounded-lg p-3 shadow-shape" v-for="produto in produtos"
            :key="produto.id">
            <h2 class="text-lg text-teal-900 font-semibold">{{ produto.descricao }}</h2>
            <div class="bg-teal-900 h-px w-[64px]"></div>
            <p>Marca: <strong class="text-teal-600 font-semibold">{{ produto.marca }}</strong></p>
            <p>Valor: <strong class="text-teal-600 font-semibold">R${{ produto.valor }}</strong></p>
            <p>Quantidade: <strong class="text-teal-600 font-semibold">{{ produto.quantidade }}</strong></p>
            <div class="bg-teal-900 h-px w-[64px]"></div>
            <div class="flex flex-col gap-2">
              <button @click="editProduto(produto, produto.id)"
                class="bg-teal-600 hover:bg-teal-700 transition-all delay-75 px-3 py-1 rounded-lg text-white font-semibold flex-1 text-center text-sm flex gap-1 justify-center items-center">
                <Pencil class="w-3 h-3 text-white" />Editar
              </button>
              <button @click="openModal(produto)"
                class="bg-orange-600 hover:bg-orange-700 transition-all delay-75 px-3 py-1 rounded-lg text-white font-semibold flex-1 text-center text-sm flex gap-1 justify-center items-center">
                <X class="w-3 h-3 text-white" />Excluir
              </button>
            </div>
          </div>
          <!-- card -->
        </div>

        <!-- Modal de Exclusão -->
        <div v-if="isModalOpen" class="fixed flex items-center justify-center inset-0 bg-black bg-opacity-50 z-20">
          <form
            class="container flex flex-col gap-2 w-full p-[10px] h-auto rounded-[15px] bg-white mx-5 max-w-[400px] justify-center items-center">
            <div class="flex justify-center mx-auto w-full max-w-[90%]">
              <p class="text-teal-900 text-center text-[20px] font-semibold ml-[10px] w-[85%] h-max">
                EXCLUIR PRODUTO
              </p>
              <button @click="closeModal" type="button" class="px-2 py-1 rounded w-[5px] flex-shrink-0">
                <X class="text-teal-900" />
              </button>
            </div>
            <TriangleAlert class="w-16 h-16 text-red-700" />

            <p class="text-center px-2">
              Essa ação é <strong class="font-semibold">definitiva</strong> e não pode ser desfeita. <strong
                class="font-semibold">Tem certeza disso?</strong>
            </p>
            <div class="flex justify-center items-center mt-[10px] w-full gap-3">
              <button @click="closeModal" type="button"
                class="px-4 py-2 border-[3px] rounded-xl font-semibold text-sm flex gap-[4px] justify-center items-center bg-slate-500 text-[#FFF]">
                CANCELAR
              </button>
              <button @click="confirmDeleteTrue()"
                class="px-4 py-2 border-[3px] rounded-xl font-semibold text-sm flex gap-[4px] justify-center items-center bg-red-700 text-[#FFF]">
                EXCLUIR
              </button>
            </div>
          </form>
        </div>
        <!-- Modal de Exclusão -->

      </div>
    </div>
  </main>
</template>

<script>
import { House, CirclePlus, LayoutList, Pencil, X, TriangleAlert } from 'lucide-vue-next';
import api from '../../services/api';

export default {
  name: 'ListarProduto',
  components: {
    House,
    CirclePlus,
    LayoutList,
    Pencil,
    X,
    TriangleAlert,
  },
  data() {
    return {
      isModalOpen: false,
      produtos: [],
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
    openModal(produto) {
      this.isModalOpen = true;
      this.editProdutoForm.id = produto.id;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async fetchProdutos() {
      try {
        const response = await api.get('/produto/visualizar');
        this.produtos = response.data;
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    },
    editProduto(produto, id) {
      this.editProdutoForm = { ...produto };
      this.$router.push(`/produto/editar/${id}`);
    },
    async deleteProduto(id) {
      try {
        await api.delete(`/produto/excluir/${id}`);
        this.fetchProdutos();
      } catch (error) {
        console.error('Erro ao deletar produto:', error);
      }
    },
    confirmDeleteTrue() {
      this.deleteProduto(this.editProdutoForm.id);
      this.closeModal();
    },

  },
  created() {
    this.fetchProdutos();
  },
};
</script>