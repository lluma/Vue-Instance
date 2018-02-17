import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Import vue-awesome components
import RouterNav from 'vue-router-nav'
import VueGoodTable from 'vue-good-table'

import News from './components/News.vue'
import About from './components/About.vue'
import Events from './components/Events.vue'

Vue.use(VueRouter)
Vue.use(RouterNav)
Vue.use(VueGoodTable)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/news', name: 'News', component: News},
    {path: '/about', name: 'About', component: About},
    {path: '/evnets', name: 'Events', component: Events}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
