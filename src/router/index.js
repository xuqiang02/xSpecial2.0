import Vue from 'vue'
import Router from 'vue-router'
import EditItem from '@/components/editItem/editItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EditItem',
      component: EditItem
    }
  ]
})
