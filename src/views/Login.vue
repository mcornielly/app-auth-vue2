<template>
  <div>
      <h1>Login</h1>
      <form @submit.prevent="login({ email: email, password: password})">
          <input class="form-control mb-2" type="email" v-model="email" placeholder="Ingrese un Email">
          <input  class="form-control mb-2" type="password" v-model="password" placeholder="Ingrese un Password">
          <button class="btn btn-primary btn-sm-btn-block float-right" type="submit">Iniciar</button>
      </form>
      <p>{{ error }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    }, 
    methods: {
        ...mapActions(['login'])
    },
    computed: {
        ...mapState(['error'])
    }
}
</script>

<style>

</style>