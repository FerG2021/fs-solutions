import 'animate.css';
import axios from 'axios';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import VueAxios from 'vue-axios';

import './style.css';

import loadModules from '../src/utils/modulesLoader';

import App from './App.vue';
import primevueConfig from './config/primevue';
import router from './managers/router/Router';
import store from './managers/store/store';
import { i18n } from './plugins/i18n';

// usado para login
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

import 'primevue/resources/themes/aura-light-purple/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css';

loadModules(router);

createApp(App)
	.use(store)
	.use(router)
	.use(i18n)
	.use(VueAxios, axios)
	.component('Button', Button)
	.component('Sidebar', Sidebar)
	.component('FloatLabel', FloatLabel)
	.component('InputText', InputText)
	.component('InputNumber', InputNumber)
	.component('Textarea', Textarea)
	.component('Toast', Toast)
	.use(ToastService)
	.use(PrimeVue, primevueConfig)
	.mount('#app');
