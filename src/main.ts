import { createStore } from 'vuex';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/styles/global.scss';
import naive from 'naive-ui';
import axios from 'axios'
import VueAxios from 'vue-axios';
import { authService } from './services/auth.service';


axios.interceptors.request.use(request => {
    const token = authService.getToken();

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
})

createApp(App).use(router).use(naive).use(VueAxios, axios).mount('#app');
