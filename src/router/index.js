import Vue from 'vue'
import Router from 'vue-router'
import ContactPage from '@/components/pages/contactPage'
import HomePage from '@/components/pages/homePage'
import FAQPage from '@/components/pages/faqPage'
import MilestonePage from '@/components/pages/milestonePage'
import TermsPage from '@/components/pages/termsPage'
import PrivacyPage from '@/components/pages/privacyPage'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition
    // } else if (to.hash) {
    //   return {selector: to.hash}
    } else if (to.name !== 'milestones') {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQPage
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsPage
    },
    {
      path: '/milestones',
      name: 'milestones',
      component: MilestonePage
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPage
    }
  ]
})
