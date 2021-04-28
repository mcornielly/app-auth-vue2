<template>
  <div>
      <h1>Registro de Usuario</h1>´
      <form @submit.prevent="createUser({email: email, password: pass_1})">
          <input  class="form-control mb-2" type="email" placeholder="Ingrese un correo" v-model="email"> 
          <input  class="form-control mb-2" type="password" placeholder="Ingrese una contraseña" v-model="pass_1"> 
          <input  class="form-control mb-2" type="password" placeholder="Confirme la Contraseña" v-model="pass_2">
          <button class="btn btn-primary btn-sm float-right" type="submit" :disabled="!disabledBtn">Registrar</button> 
      </form>
      <p>{{ error }}</p>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    data() {
        return {
            email: '',
            pass_1: '',
            pass_2: ''
        }
    },
    created() {

    },
    methods: {
        ...mapActions(['createUser'])
    },
    computed: {
        ...mapState(['error']),
        disabledBtn(){
            return this.pass_1 === this.pass_2 && this.pass_1.trim() !== '' && this.pass_1.length > 5
        }
    }
}
</script>

<style>

</style>