<template>
    <div class="flex flex-row min-h-screen w-full bg-gray-100">
        <div id="sidebar" class="h-full fixed w-1/6 flex text-gray-600 gap-8 shadow-lg items-center py-40 font-bold text-2xl flex-col">
        <router-link to="/">
            <i class="fa fa-home mr-5"></i> Home
        </router-link>
        <router-link to="/profile">
            <i class="fa fa-user mr-5"></i> Profile
        </router-link>
        <router-link to="/news">
            <i class="fa fa-newspaper mr-5"></i> News
        </router-link>
        <router-link to="/settings">
            <i class="fa fa-cog mr-5"></i> Settings
        </router-link>
        <div class="mt-auto">
            <router-link to="/login">
            <i class="fa fa-sign-in mr-5"></i> Login
            </router-link>
        </div>
        </div>
        <main class="flex-1 ml-1/4">
        <slot></slot>
        </main>
    </div>
</template>
  
  
  <script>

  import '@fortawesome/fontawesome-free/css/all.css'


  export default {
    name: 'Layout',
  };
  </script>
  
  <style>

    main{
        margin-left: calc(100% / 6); 
    }
  </style>