import './bootstrap';
import { createApp,markRaw } from 'vue';
import router from "./router"
import {createPinia} from "pinia"


import "../../node_modules/sweetalert2/dist/sweetalert2.min.css"
import Swal from 'sweetalert2'

window.Swal = Swal;


import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true,
    timeout: 2000
};

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const pinia = createPinia();




const app = createApp({});



pinia.use(({store}) =>{
    store.router = markRaw(router);
});
app.use(ElementPlus)
app.use(router);
app.use(pinia);
app.use(Toast, options);
app.mount('#app');
