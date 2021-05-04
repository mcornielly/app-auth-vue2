<template>
  <div>
      <div class="col-md-12">
      <h1>Editar</h1>
      {{ task.id }} - {{ task.name }}
        <form @submit.prevent="updateTask(task)" class="form-group">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                </div>
            <input type="text" v-model="task.name" class="form-control">
            </div>
            <span class="text-danger d-block" v-if="!$v.task.name.required">La tarea es requerida</span>
            <button class="btn btn-primary float-right" :disabled="$v.task.name.$invalid">Actualizar</button>
        </form>
      <!-- {{ $v.task.name }} -->
      </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
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
    }, 
    validations: {
        task: {
            name: {
                required
            }
        }
    }
}
</script>

<style>

</style>