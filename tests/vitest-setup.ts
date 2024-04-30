// tests/vitest-setup.ts
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import { config } from "@vue/test-utils";
import { createPinia } from "pinia";

const app = createApp({});
const vuetify = createVuetify();
const pinia = createPinia();

app.use(vuetify);
app.use(pinia);

config.global.plugins.push([vuetify]);
config.global.plugins.push(pinia);
