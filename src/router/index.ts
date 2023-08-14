import { createRouter, createWebHistory } from 'vue-router'
import AllArtists from '../views/artists/AllArtists.vue'
import AddArtists from '../views/artists/AddArtists.vue'
import EditArtists from '../views/artists/EditArtists.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllArtists
    },
    {
      path: '/add-artist',
      name: 'addArtist',
      component: AddArtists,
    },
    {
      path: "/edit-artists/:id",
      name: "Edit Artists",
      component: EditArtists,
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
