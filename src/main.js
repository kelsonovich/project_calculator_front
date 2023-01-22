import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import store from './store';
import network from "@/api/network";
import '@/assets/css/custom.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

network.configure();

const app = createApp(App);

app.use(router);
app.use(store);
router.isReady().then(() => app.mount('#app'))

// createApp(App).use(store).use(router).mount('#app')



