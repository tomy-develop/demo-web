import Vue from 'vue'
import Router from 'vue-router'
import root from './routes/root'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...root,
  ],
})
