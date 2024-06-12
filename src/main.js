// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure this path is correct to your router setup
// import store from './store'; // Uncomment if you're using Vuex

const app = createApp(App);
app.use(router);
// app.use(store); // Uncomment if you're using Vuex
app.mount('#app');