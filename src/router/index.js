import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Forgetpassword from '../views/Forgetpassword.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import OTP from '../views/OTP.vue'
import ImageGallery from '../components/ImageGallery.vue'
import UniqueImage from '../components/UniqueImage.vue'
import Uploadimage from '../components/Uploadimage.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/signup",
    component: Signup
  },
  {
    path: "/",
    component: Login,
    name: Login
  },
  {
    path: "/forgetpassword",
    component: Forgetpassword
  },
  {
    path: '/Home',
    component: Home,
    name: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/otp',
    component: OTP
  },
  {
    path: '/imagegallery',
    component: ImageGallery
  },
  {
    path: '/uniqueimage',
    component: UniqueImage
  },
  {
    path: '/uploadimage',
    component: Uploadimage
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Router Guards 
router.beforeEach((to, from, next) => {

  var isAuthenticated = false;
  if (localStorage.getItem('Token'))
    isAuthenticated = true;
  else
    isAuthenticated = false;
  if (['/', '/signup', '/forgetpassword', '/otp' ].includes(to.path) || isAuthenticated) {
    next();
  } else {
    next('/'); 
  }
})

export default router