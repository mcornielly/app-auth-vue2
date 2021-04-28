import Vue from 'vue'
import App from './App.vue'
import { auth } from './firebase'
import router from './router'
import store from './store'

Vue.config.productionTip = false

auth.onAuthStateChanged(user => {
  if(user){
    // console.log(user);
    const activeUser = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('activeUser', activeUser)
  }else{
    // console.log(user);
    store.dispatch('activeUser', user)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

})

