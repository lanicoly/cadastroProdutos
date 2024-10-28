import { createApp } from 'vue'
import './style.css'
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router'; 

const app = createApp(App);

app.use(router, VueSweetalert2);
app.mount('#app');

