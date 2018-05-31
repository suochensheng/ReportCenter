import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * 导入所有的Vue页面，仅TopBar中用到的即可
 */

import Home from '../components/App'
import Financial_OverdueBCT from '../components/Financial/OverdueBCT'

Vue.use(VueRouter)
export { routes as default }

var routes = new VueRouter({
    routes: [
        {
            // 设置起始页
            path: '/',
            redirect: 'Home'
        }, {
            path: '/home',
            component: App
        }, {
            path: '/Financial/OverdueBCT',
            component: Financial_OverdueBCT
        }, 
    ]
});

