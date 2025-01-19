import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import {Quasar} from "quasar";
import {createPinia} from "pinia";
import iconSet from 'quasar/icon-set/material-icons';

import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';

const app = createApp(App);
app.use(router);
app.use(Quasar, {
    config: {
        brand: {
            primary: '#1cb1ff',
            secondary: '#3f9bcc',
            accent: '#4e7f99'
        }
    },
    iconSet: iconSet,
})
app.use(createPinia())
app.mount('#app');
