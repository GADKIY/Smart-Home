import Vue from 'vue'
import App from './App.vue'
import router from './router'
import svg from 'v-svg'

Vue.config.productionTip = false
Vue.use(svg, {
  filepath: require('@/assets/svg/sprite.svg'), // Optional filepath to your svg sprite
  prefix: '',  // Optional prefix for all your sprite names
  class: 'icon', // Optional class that will be applied to the <svg> element (optional)
  size: '80' // Optional default size value
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
