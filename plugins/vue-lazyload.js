import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,
  {
    preLoad: 1,
    error: '../assets/images/error.svg',
    loading: '../assets/images/loading.svg',
    attempt: 1
  }
)
