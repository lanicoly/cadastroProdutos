import { createRouter, createWebHistory } from 'vue-router';

import Inicio from '../views/Inicio.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio,
    },
    {
        path: '/produto/criar',
        name: 'Criar Produto',
        component: () => import('../components/criar-produto/CriarProduto.vue'),
    },
    {
        path: '/produto/visualizar',
        name: 'Visualizar Produtos',
        component: () => import('../components/listar-produto/ListarProduto.vue'),
    },
    {
        path: '/produto/atualizar',
        name: 'Atualizar Produto',
        component: () => import('../components/atualizar-produto/AtualizarProduto.vue'),
    },
    {
        path: '/:catchAll(.*)',
        name: 'Página não encontrada',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});


export default router;
