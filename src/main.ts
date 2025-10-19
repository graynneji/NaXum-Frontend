import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { VueReCaptcha } from "vue-recaptcha-v3";

const app = createApp(App);

app.use(VueReCaptcha, {
  siteKey: "YOUR_SITE_KEY_HERE",
  loaderOptions: {
    autoHideBadge: true,
  },
});

app.mount("#app");
