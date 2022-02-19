import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
const app = createApp(App);

/*** Global Components ***/
//Button
import ButtonComponent from '@/components/UI/ButtonComponent.vue';
app.component('ButtonComponent', ButtonComponent);

app.use(router).mount('#app');
