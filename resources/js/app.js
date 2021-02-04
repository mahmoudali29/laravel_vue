require('./bootstrap');

import router from './routes';
import VueRouter from "vue-router";
import Index from "./Index";

window.Vue = require('vue');
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('example-second-component', require('./components/ExampleSecond.vue').default);
// Vue.component('BookableListItem', require('./bookables/BookableListItem.vue').default);

Vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    router:router,
    components:{
    	"Index":Index,
    }
});
