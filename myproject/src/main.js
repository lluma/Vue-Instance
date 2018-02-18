import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'

// Import vue-awesome components
import RouterNav from 'vue-router-nav'
import VueGoodTable from 'vue-good-table'

import News from './components/News.vue'
import About from './components/About.vue'
import Events from './components/Events.vue'
import Resources from './components/Resources.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

import store from './store'

Vue.use(VueRouter)
Vue.use(RouterNav)
Vue.use(VueGoodTable)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/news', name: 'News', component: News},
    {path: '/about', name: 'About', component: About},
    {path: '/evnets', name: 'Events', component: Events},
    {path: '/resources', name: 'Resources', component: Resources},
    {path: '/signin', component: SignIn},
    {path: '/signup', component: SignUp}
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user)
    router.push('/')
  } else {
    router.push('/signin')
    // router.replace('/signin')
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
