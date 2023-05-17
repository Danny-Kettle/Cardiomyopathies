<template>
    <div class="flex flex-row min-h-screen w-full bg-gray-100">
        <div id="sidebar" class="h-full z-40 fixed lg:flex w-1/2 lg:w-1/6 bg-slate-500 text-white gap-8 shadow-lg items-center py-40 font-semibold tracking-wider text-lg flex-col" :class="sidebarClasses"  >
          <i v-if="sidebarOpen" @click="toggleSidebar" class="z-50 absolute left-8 top-8 fa-solid fa-xmark"></i>
          <router-link class="flex flex-row" to="/">
              <i class="fa fa-home my-auto w-12"></i> <span class="w-12">Home</span>
          </router-link>
          <router-link class="flex flex-row" to="/charts">
            <i class="fa-solid fa-chart-simple my-auto w-12"></i> <span class="w-12">Charts</span>
          </router-link>
          <router-link class="flex flex-row" v-if="user.isLoggedIn" to="/profile">
              <i v-if="user.role !== 'doctor'" class="fa fa-user my-auto w-12"></i><i v-else class="fas fa-user-doctor my-auto w-12"></i> <span class="w-12">{{ user.isLoggedIn ? capitalizedFirstName : 'Profile'}}</span> 
          </router-link>
          <router-link class="flex flex-row" v-if="!user.isLoggedIn" to="/login">
              <i v-if="user.role !== 'doctor'" class="fa fa-user my-auto w-12"></i><span class="w-12">{{ user.isLoggedIn ? capitalizedFirstName : "Profile"}}</span> 
          </router-link>
          <router-link class="flex flex-row" to="/news">
              <i class="fa fa-newspaper w-12 my-auto "></i> <span class="w-12">News</span>
          </router-link>
          <router-link class="flex flex-row" to="/faq">
            <i class="fa-solid fa-circle-info my-auto w-12"></i> <span class="w-12">FAQ</span>
          </router-link>
          <router-link class="flex flex-row" to="/HPO">
              <i class="fa-solid fa-book-open w-12 my-auto"></i> <span class="w-12">HPO</span>
          </router-link>
          <div v-if="!user.isLoggedIn" class="mt-auto">
              <router-link class="flex flex-row" to="/login">
              <i class="fa fa-sign-in w-12 my-auto"></i> <span class="w-12">Login</span>
              </router-link>
          </div>
          <div v-if="user.isLoggedIn" class="mt-auto" @click="logout">
              <router-link class="flex flex-row" to="/login">
              <i class="fa fa-sign-in w-12 my-auto"></i> <span class="w-12">Logout</span>
              </router-link>
          </div>
        </div>
        <main class="flex-1 overflow-y-hidden">
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
      </div>
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