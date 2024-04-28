import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.min.css";
import App from "./App.vue";
import router from '@/router';
import './assets/global.css';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const app = createApp(App);
const pinia = createPinia();

app.use(vuetify);
app.use(pinia);
app.use(router);

app.mount("#app");
