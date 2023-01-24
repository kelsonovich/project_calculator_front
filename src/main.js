import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import store from './store';
import network from "@/api/network";
import '@/assets/css/custom.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Toast, {POSITION} from 'vue-toastification';
import "vue-toastification/dist/index.css";

const toastOptions = {
    position: POSITION.BOTTOM_RIGHT,
    shareAppContext: true,
    timeout: 3000,
    pauseOnHover: true,
}

network.configure();

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Toast, toastOptions);
router.isReady().then(() => app.mount('#app'));
