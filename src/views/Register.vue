<template>
  <div>
      <h1>Registro de Usuario</h1>´
      <form @submit.prevent="createUser({email: email, password: pass_1})">
          <input  class="form-control mb-2" type="email" placeholder="Ingrese un correo" v-model.lazy="$v.email.$model">
            <div v-if="$v.email.$error">
                <small class="text-danger d-block" v-if="!$v.email.required">El email es requerido</small>
                <small class="text-danger d-block" v-if="!$v.email.email">El email es incorrecto</small>
            </div> 
          <input  class="form-control mb-2" type="password" placeholder="Ingrese una contraseña" v-model="$v.pass_1.$model">
            <div v-if="$v.pass_1.$error">
                <small class="text-danger d-block" v-if="!$v.pass_1.required">El password es requerido</small>
                <small class="text-danger d-block" v-if="!$v.pass_1.$minLength">El pass debe ser mayor o igual a 6 caracteres</small>
            </div> 
          <input  class="form-control mb-2" type="password" placeholder="Confirme la Contraseña" v-model="$v.pass_2.$model">
                <div v-if="$v.pass_2.$error">
                    <small class="text-danger d-block" v-if="!$v.pass_2.sameAsPassword">El password no coindcide</small>
                </div> 
          <button class="btn btn-primary btn-sm float-right" type="submit" :disabled="!disabledBtn">Registrar</button> 
      </form>
      <p><small v-if="error === 'auth/email-already-in-use'" class="text-danger">El Email se encuentra registrado</small></p>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
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
    },
    validations: {
        email: {
            required,
            email
        },
        pass_1: {
            required,
            minLength: minLength(6)
        },
        pass_2: {
            required,
            sameAsPassword: sameAs('pass_1')
        }
    }
}
</script>

<style>

</style>