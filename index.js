// import './demo.css';
import Vue from 'vue';
import App from './vue/App.vue';
import { add, mul } from './src/demo.js';
console.log(add(10,20));
console.log(mul(10,20));


new Vue({
    el:'#app',
    template:`<App/>`,
    components:{
        App
    }
});