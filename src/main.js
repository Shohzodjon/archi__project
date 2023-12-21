import "./assets/style/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./i18n/i18n";
import App from "./App.vue";
import router from "./router";
import AOS from 'aos'
import 'aos/dist/aos.css'

const pinia=createPinia();
const app = createApp(App);
app.use(pinia);

app.use(AOS);
app.use(i18n)
app.use(router);

app.mount("#app");
