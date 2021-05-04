<template>
  <div>
      <h1>Login</h1>
      <form @submit.prevent="login({ email: email, password: password})">
          <input class="form-control mb-2" type="email" v-model.lazy="$v.email.$model" placeholder="Ingrese un Email">
          <div v-if="$v.email.$error">
            <small class="text-danger d-block" v-if="!$v.email.required">El email es requerido</small>
            <small class="text-danger d-block" v-if="!$v.email.email">El email es incorrecto</small>
          </div>
          <input  class="form-control mb-2" type="password" v-model.lazy="$v.password.$model" placeholder="Ingrese un Password">
          <div v-if="$v.password.$error">
            <small class="text-danger d-block" v-if="!$v.password.required">El password es requerido</small>
            <small class="text-danger d-block" v-if="!$v.password.$minLength">El pass debe ser mayor o igual a 6 caracteres</small>
          </div>
          <button class="btn btn-primary btn-sm-btn-block float-right" type="submit" :disabled="$v.$invalid">Iniciar</button>
      </form>
        <p><small v-if="error === 'auth/user-not-found'" class="text-danger">Usuario no esta registrado</small></p>
        <p><small v-if="error === 'auth/wrong-password'" class="text-danger">Password incorrecto</small></p>
  </div>    
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
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
    },
    validations: {
        email: {
            required,
            email,
        },
        password: {
            required,
            minLength: minLength(6)
        }
    }
}
</script>

<style>

</style>