import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
const app = createApp(App);

/*** Global Components ***/

//Button
import ButtonComponent from '@/components/UI/ButtonComponent.vue';
app.component('ButtonComponent', ButtonComponent);

/*** End Global Components***/

app.use(router).use(store).mount('#app');
