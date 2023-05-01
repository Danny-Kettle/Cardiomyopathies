<template>
    <div class="h-full flex justify-center items-center">
      <div class="flex justify-center w-1/3 mb-8">
        <div class="bg-white shadow-md w-full rounded px-24 py-16">
          <h2 class="text-2xl font-semibold mb-4">Reset Password</h2>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label class="block mb-2 text-gray-800" for="email">Email</label>
              <input
                class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                type="email"
                name="email"
                id="email"
                v-model="email"
                required
              />
            </div>
            <div class="flex justify-between items-center">
              <button
                class="px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                type="submit"
              >
                Reset Password
              </button>
              <button
                class="text-blue-500 hover:text-blue-600 focus:outline-none"
                type="button"
                @click="goToLogin"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>

  <script>

  import {firebaseAuthentication, sendPasswordResetEmail} from '../../firebase/database'
  
  export default {
    data() {
        return {
            email: "",
        };
    },
    methods: {
      handleSubmit() {
        console.log(this.email);
        sendPasswordResetEmail(firebaseAuthentication, this.email)
          .then(() => {
            alert("Password reset email sent!");
          })
          .catch((error) => {
            alert(error.message);
          });
      },
      goToLogin() {
        window.location.href = '/login';
    }
    },
  };
  </script>
  