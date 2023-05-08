<template>
    <div class="overflow flex flex-row min-h-screen w-full bg-gray-100">
        <div id="sidebar" class="absolute h-full z-5 fixed lg:flex w-1/2 lg:w-1/6 bg-gray-100 text-gray-600 gap-8 shadow-lg items-center py-40 font-bold text-lg flex-col" :class="sidebarClasses"  >
          <i v-if="sidebarOpen" @click="toggleSidebar" class=" z-20 absolute left-8 top-8 fa-solid fa-xmark"></i>
          <router-link to="/">
              <i class="fa fa-home mr-5"></i> Home
          </router-link>
          <router-link v-if="user.isLoggedIn" to="/profile">
              <i v-if="user.role !== 'doctor'" class="fa fa-user mr-5"></i><i v-else class="fas fa-user-doctor mr-5"></i> {{ user.isLoggedIn ? capitalizedFirstName : "Profile"}} 
          </router-link>
          <router-link v-if="!user.isLoggedIn" to="/login">
              <i v-if="user.role !== 'doctor'" class="fa fa-user mr-5"></i>{{ user.isLoggedIn ? capitalizedFirstName : "Profile"}} 
          </router-link>
          <router-link to="/news">
              <i class="fa fa-newspaper mr-5"></i> News
          </router-link>
          <router-link to="/FAQ">
              <i class="fa-solid fa-book-open mr-5"></i> FAQ
          </router-link>
          <router-link to="/HPO">
              <i class="fa-solid fa-book-open mr-5"></i> HPO
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
        <main class="flex-1 overflow-x-hidden ml-1/4">
          <header class="w-full h-32 lg:mb-10 py-4 flex justify-content shadow-md lg:shadow-none">
            <div  @click="toggleSidebar" class="absolute lg:hidden left-10 top-12">
              <i class="fa-solid fa-bars text-slate-600 text-2xl"></i>
            </div>
            <div class=" h-full mx-auto flex justify-center items-center">
              <span class="text-slate-600 font-extrabold text-lg lg:text-4xl tracking-tight -mr-3 lg:-mr-4">GR</span>
              <img class="h-3/5 lg:h-3/4" src="../assets/img/heartlogo.png"/>
              <span class="text-slate-600 font-extrabold text-lg lg:text-4xl tracking-tight -ml-3 lg:-ml-4">PH</span>
            </div>
          </header>
          <slot></slot>
        </main>
      </diV>
</template>
  
  
<script>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { signOut, firebaseAuthentication } from '../firebase/database'
import { updateUserStatus } from '../stores/utils'
import { eventBus } from '../stores/eventBus'
import '@fortawesome/fontawesome-free/css/all.css'
 

export default {
  name: 'Layout',
  setup() {
    const router = useRouter()  
    const user = ref(updateUserStatus())
    const sidebarOpen = ref(false)

    const capitalizedFirstName = computed(() => {
      return user.value.firstName.charAt(0).toUpperCase() + user.value.firstName.slice(1).toLowerCase()
    })

    const logout = async () => {
      try {
        await signOut(firebaseAuthentication)
        sessionStorage.removeItem('user')
        eventBus.emit('user-changed')
        router.push('/login')
      } catch (error) {
        console.error(error)
      }
    }

    const sidebarClasses = computed(() => {
      return sidebarOpen.value ? 'flex' : 'hidden'
    })

    const toggleSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value
      console.log(sidebarOpen.value);
    }

    onMounted(() => {
      user.value = updateUserStatus()
      eventBus.on('user-changed', () => {
        user.value = updateUserStatus()
      })
    })

    watch(router.currentRoute, () => {
      sidebarOpen.value = false
    })

    return {
      user,
      capitalizedFirstName,
      toggleSidebar,
      sidebarClasses,
      sidebarOpen,
      logout
    }
  }
}
</script>


  
  <style>

    @media only screen and (min-width: 1024px) {
      main{
          margin-left: calc(100% / 6); 
      }
    }
  </style>