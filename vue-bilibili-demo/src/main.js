import Vue from 'vue'
import app from '../app.vue'
import router from './router'
import MinUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
Vue.use(MinUI)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(app),
}).$mount('#app')