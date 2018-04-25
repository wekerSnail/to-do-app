import Vue from 'vue'
import Router from 'vue-router'
import Notes from 'components/notes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Notes

    }
  ]
})
