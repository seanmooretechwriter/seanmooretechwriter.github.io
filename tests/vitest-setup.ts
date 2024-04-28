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

config.global.plugins.push(vuetify);
config.global.plugins.push(pinia);

/*
This code may be a solution to remove WARNs that are seen in tests for vuetify components
The current solution is in the vite.config.ts file (and is commented to remember why it was added)
import { createVuetify } from 'vuetify';
import { config } from '@vue/test-utils';

const vuetify = createVuetify();  // All Vuetify components are loaded

config.global.plugins.push(vuetify);
*/
