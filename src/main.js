import Vue from 'vue'
import App from './App.vue'
import VeuResource from "vue-resource";
import response from "vue-resource/src/http/response";

Vue.use(VeuResource);

Vue.http.options.root="https://vuejs-vue-resource-7e83f.firebaseio.com";

Vue.http.interceptors.push((request,next) =>{
next(response => {

  response.json = () => {
    return {
      userList : response.data
    }
  }

});
});

new Vue({
  el: '#app',
  render: h => h(App)
})
