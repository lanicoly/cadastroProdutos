import { createRouter, createWebHistory } from 'vue-router';

import App from '../App.vue';
import NotFound from '../views/NotFound.vue';
import Inicio from '../views/Inicio.vue';

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio,
    },
    {
        path: '/produto/novo',
        name: 'CriarProduto',
        component: () => import('../components/criar-produto/CriarProduto.vue'),
    },
    {
        path: '/produto/visualizar',
        name: 'VisualizarProdutos',
        component: () => import('../components/listar-produto/ListarProduto.vue'),
    },
    {
        path: '/produto/atualizar',
        name: 'AtualizarProduto',
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
