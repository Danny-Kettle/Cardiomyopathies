<template>
    <div class="flex flex-row min-h-screen w-full bg-gray-100">
        <div id="header" class="h-full fixed w-1/6 flex text-gray-600 gap-8 shadow-lg items-center py-40 font-bold text-2xl flex-col">
        <router-link to="/">
            <i class="fa fa-home mr-5"></i> Home
        </router-link>
        <router-link to="/profile">
            <i class="fa fa-user mr-5"></i> {{ user.isLoggedIn ? capitalizedFirstName : "Profile"}} 
        </router-link>
        <router-link to="/news">
            <i class="fa fa-newspaper mr-5"></i> News
        </router-link>
        <router-link to="/HPO">
            <i class="fa fa-newspaper mr-5"></i> HPO
        </router-link>
        <router-link to="/settings">
            <i class="fa fa-cog mr-5"></i> Settings
        </router-link>
        <div v-if="!user.isLoggedIn" class="mt-auto">
            <router-link to="/login">
            <i class="fa fa-sign-in mr-5"></i> Login
            </router-link>
        </div>
        <div v-if="user.isLoggedIn" class="mt-auto" @click="logout">
            <router-link to="/login">
            <i class="fa fa-sign-in mr-5"></i> Logout
            </router-link>
        </div>
        </div>
        <main class="flex-1 ml-1/4">
        <slot></slot>
        </main>
    </div>
</template>
  
  
<script>
import { ref, computed, onMounted, watch  } from 'vue'
import { useRouter } from 'vue-router'
import { signOut, firebaseAuthentication } from '../firebase/database'
import { updateUserStatus } from '../stores/userModule'
import {eventBus} from '../stores/eventBus';



export default {
  name: 'Layout',
  setup() {
    const router = useRouter()
    const user = ref(updateUserStatus())

    const capitalizedFirstName = computed(() => {
      return user.value.firstName.charAt(0).toUpperCase() + user.value.firstName.slice(1).toLowerCase()
    })

    const logout = async () => {
      try {
        await signOut(firebaseAuthentication)
        sessionStorage.removeItem('user')
        eventBus.emit('user-changed');
        router.push('/login')
      } catch (error) {
        console.error(error)
      }
    }

   
    onMounted(() => {
      user.value = updateUserStatus()
      eventBus.on('user-changed', () => {
        user.value = updateUserStatus()
      })
    })

    return {
      user,
      capitalizedFirstName,
      logout
    }
  }
}
</script>


  
  <style>

    main{
        margin-left: calc(100% / 6); 
    }
  </style>