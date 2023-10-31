import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../views/FrontPage.vue'
import Resume from '../views/Resume.vue'
import Education from '../views/Education.vue'
import Skills from '../views/Skills.vue'
// import Projects from '../views/Projects.vue'
import Experience from '../views/Experience.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrontPage
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '/education',
      name: 'education',
      component: Education,
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
    // {
    //   path: '/projects',
    //   name: 'projects',
    //   component: Projects,
    // },
    {
      path: '/experience',
      name: 'experience',
      component: Experience,
    },
  ]
})

export default router
