import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * 导入所有的Vue页面，仅TopBar中用到的即可
 */

// import Home from './App'
import Financial_OverdueBCT from '../components/Financial/OverdueBCT'

Vue.use(VueRouter)
export { routes as default }

var routes = new VueRouter({
    routes: [
        {
            path: '/Financial/OverdueBCT',
            component: Financial_OverdueBCT
        }, 
    ]
});

