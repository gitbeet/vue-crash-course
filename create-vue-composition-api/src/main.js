import "./assets/main.css";
import "primeicons/primeicons.css";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import router from "./router";
import Toast from "vue-toastification";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(Toast);

app.mount("#app");
