import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import BootstrapVue3 from 'bootstrap-vue-3'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue-3/dist/bootstrap-vue-3.css'

const firebaseConfig = {
    apiKey: "AIzaSyDhamb20qKklCRPcO6G7jchB8NTMhRpKv8",
    authDomain: "plance-3e3cb.firebaseapp.com",
    projectId: "plance-3e3cb",
    storageBucket: "plance-3e3cb.appspot.com",
    messagingSenderId: "819351280961",
    appId: "1:819351280961:web:7e3de0f522499fffaa95c0",
    measurementId: "G-72SD7W36Y2"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  
  
const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
