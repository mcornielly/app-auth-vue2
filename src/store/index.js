import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    task: {},
    tasks: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setTask(state, payload) {
      state.task = payload
    },
    setTasks(state, payload) {
      state.tasks = payload
    },
    setDeleteTask(state, payload) {
      const filterTasks = state.tasks.filter(item => item.id !== payload)
      state.tasks = filterTasks
    }
  },
  actions: {
    getTasks({commit, state}, userId) {
      const tasks = []
      db.collection(state.user.email).get()
      .then(res => {
        res.forEach(doc => {
          console.log(doc.id)
          console.log(doc.data)
          let task = doc.data()
          task.id = doc.id
          tasks.push(task)
        })
      })
      commit('setTasks', tasks)
    },
    addTask({commit}, task) {
        // console.log(id)
        db.collection(task.userEmail).add({
          id: task.id,
          name: task.name,
        })
        .then(doc => {
          // console.log(doc.id);
          router.push('/')
        })
    },
    createUser({commit}, user) {
      auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUser = {
          email: res.user.email,
          uid: res.user.uid
        }
        commit('setUser', newUser)
        router.push('/')        
      })
      .catch(error => {
        console.log(error);
        commit('setError', error)
      })
    },
    getTask({commit, state}, taskId) {
      db.collection(state.user.email).doc(taskId).get()
      .then(doc => {
        console.log(doc.id)
        console.log(doc.data())
        let task = doc.data()
        task.id = doc.id
        commit('setTask', task)
      })
    },
    updateTask({commit, state}, task) {
      db.collection(state.user.email).doc(task.id).update({
        name: task.name
      })
      .then(() => {
        console.log('Tarea Actualizada');
        router.push('/')
      })
    },
    deleteTask({commit, state}, taskId) {
      db.collection(state.user.email).doc(taskId).delete()
      .then(() => {
        console.log('Tarea Eliminada');
        commit('setDeleteTask', taskId)
      })
    },
    login({commit}, user) {
      auth.signInWithEmailAndPassword(user.email, user.password) 
      .then(res => {
        // console.log(res)
        const UserLogin = {
          email: res.user.email,
          uid: res.user.uid
        }
        commit('setUser', UserLogin)
        router.push('/')  
      })
      .catch(error => {
        console.log(error);
        commit('setError', error)
      })
    },
    logout({commit}) {
      auth.signOut()
      .then(() => {
        commit('setUser', null)
        router.push('/login')
      })
    },
    activeUser({commit}, user) {
      commit('setUser', user)
    }
  },
  getters: {
    existUser(state){
      if(state.user === null){
        return false
      }else{
        return true
      }
    }
  },
  modules: {
  }
})
