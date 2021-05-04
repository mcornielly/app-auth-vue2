<template>
    <div>
        <h2>Nueva Tarea</h2>
        <hr>
        <div class="col-md-12">
            <form class="form-group" @submit.prevent="processForm()">
                <input class="form-control" v-model.lazy="$v.task.name.$model" type="text" placeholder="Ingrese una tarea"
                 :class="{'is-invalid': $v.task.name.$error, 'is-valid': !$v.task.name.$invalid }"/>
                <div v-if="$v.task.name.$error">
                    <small class="text-danger d-block" v-if="!$v.task.name.required">La tarea es requerida</small>
                    <small class="text-danger d-block" v-if="!$v.task.name.$minLength">La tarea debe ser mayor a 5 caracteres</small>
                </div>
                <button class="btn btn-primary mt-2 float-right" type="submit" :disabled="$v.$invalid || loader">Regitrar</button>
            </form>
            {{$v.task.name}}
            <pre class="mt-5">{{ task }}</pre>
        </div>
    </div>  
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            task:{
                id: '',
                name: '',
                userEmail: '',
            },
        }
    },
    methods: {
        ...mapActions(['addTask']),
        processForm() {
            const idTask = Date.now();

            this.task = {
                id : idTask,
                name: this.name,
                userEmail: this.user.email
            }

            // Se envian los datos
            this.addTask(this.task)

            // console.log(this.task)
        }

    },
    validations: {
        task: {
            name: {
                required,
                minLength: minLength(5)
            }
        }
    },
    computed: {
        ...mapState(['user','loader'])
    },

}
</script>

<style>

</style>