<template>
    <div>
        <h2>Nueva Tarea</h2>
        <hr>
        <div class="col-md-12">
            <form class="form-group" @submit.prevent="processForm">
                <input class="form-control" v-model="task.name" type="text" placeholder="Ingrese una tarea"/>
                <button class="btn btn-primary mt-2 float-right" type="submit">Regitrar</button>
            </form>
            <pre class="mt-5">{{ task }}</pre>
        </div>
    </div>  
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            task: {
                userEmail: '',
                id: '',
                name: ''
            }
        }
    },
    methods: {
        ...mapActions(['addTask']),
        processForm() {
            const idTask = Date.now();

            this.task = {
                id : idTask,
                name: this.task.name,
                userEmail: this.user.email
            }

            // Se envian los datos
            this.addTask(this.task)

            // console.log(this.task)
        }
    },
    computed: {
        ...mapState(['user'])
    }
}
</script>

<style>

</style>