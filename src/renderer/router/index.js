import Vue from 'vue'
import Router from 'vue-router'

import About from '@/views/About'
import Home from '@/views/Home'

Vue.use(Router)

const ROUTER = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/docs',
      component: About,
      meta: {
        title: 'Docs'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// dynamically set application title to current view
ROUTER.afterEach(to => {
  let title = `${to.meta.title} - ${process.env.NODE_ENV}`
  if (!title) title = 'Not found'

  document.title = title
})

export default ROUTER
