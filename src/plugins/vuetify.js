import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { mdiViewDashboard } from "@mdi/js";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
      viewDashboard: mdiViewDashboard,
    },
    sets: { mdi },
  },
});

export default vuetify;
