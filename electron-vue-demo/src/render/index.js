import Vue from 'vue';
import index from './views/index.vue';

//取消 Vue 所有的日志与警告
Vue.config.silent = true;
new Vue({
    el: '#app',
    render: h => h(index)
});