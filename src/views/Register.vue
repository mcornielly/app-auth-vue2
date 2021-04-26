<template>
  <div>
      <h1>Registro de Usuario</h1>´
      <form>
          <input type="email" placeholder="Ingrese un correo" v-model="email"> 
          <input type="password" placeholder="Ingrese una contraseña" v-model="pass_1"> 
          <input type="password" placeholder="Confirme la Contraseña" v-model="pass_2">
          <button type="submit">Registrar</button> 
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            pass_1: '',
            pass_2: ''
        }
    }
}
</script>

<style>

</style>