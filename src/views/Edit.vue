<template>
  <div>
      <h1>Editar</h1>
      {{ task.id }} - {{ task.name }}
      <div class="col-md-12">
        <form @submit.prevent="updateTask(task)" class="form-group">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                </div>
            <input type="text" v-model="task.name" class="form-control">
            </div>
            <button class="btn btn-primary float-right">Actualizar</button>
        </form>
      </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Edit',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.getTask(this.id)
    },
    methods: {
        ...mapActions(['getTask', 'updateTask'])
    },
    computed: {
        ...mapState(['task'])
    }
}
</script>

<style>

</style>