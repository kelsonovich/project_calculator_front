import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import store from './store';
import network from "@/api/network";
import '@/assets/css/custom.css';

network.configure();

const app = createApp(App);

app.use(store);
app.use(router);
router.isReady().then(() => app.mount('#app'))

// createApp(App).use(store).use(router).mount('#app')



