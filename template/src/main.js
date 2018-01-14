import Vue from 'vue'
import App from './App.vue'

//Router
import router from './router';

//Store
import store from './store';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
