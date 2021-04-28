<template>
    <div>
        <h1>App Firebase Hosting - (Ruta Protegida)</h1> 
        <h4>Nuevo Ajuste para validar el deploy - 2</h4>
        <p v-if="user">{{ user.email }}</p>
        <hr>
        <router-link class="btn btn-primary btn-block" to="/crear_tarea">Nueva Tarea</router-link>  
        <hr>
        <p>
            <ul class="list-group">
                <li class="list-group-item text-left" v-for="item in tasks" :key="item.id">
                        {{ item.id }} - {{ item.name }}
                    <div class="float-right">
                        <router-link class="btn btn-dark btn-sm mr-2" :to="{name: 'Edit',params: {id: item.id}}">Editar</router-link>
                        <button class="btn btn-danger btn-sm" @click="deleteTask(item.id)">Eliminar</button>
                    </div>
                </li>
            </ul>
        </p>   
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Home',
    created() {
        this.getTasks()
    },
    computed: {
        ...mapState(['user', 'tasks'])
    },
    methods: {
        ...mapActions(['getTasks', 'deleteTask'])
    }
}
</script>

<style>

</style>