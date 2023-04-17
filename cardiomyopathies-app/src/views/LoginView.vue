<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-center mb-8">
        <div class="w-full max-w-sm">
          <div class="bg-white shadow-md rounded px-8 py-6">
            <h2 class="text-2xl font-semibold mb-4">{{ isSignup ? 'Create Account' : 'Login' }}</h2>
            <form @submit.prevent="handleSubmit">
              <div class="mb-4" v-if="isSignup">
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
              <div class="mb-4">
                <label class="block mb-2 text-gray-800" for="username">Username</label>
                <input
                  class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                  type="text"
                  name="username"
                  id="username"
                  v-model="username"
                  required
                />
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-gray-800" for="password">Password</label>
                <input
                  class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                  type="password"
                  name="password"
                  id="password"
                  v-model="password"
                  required
                />
              </div>
              <div class="mb-4" v-if="isSignup">
                <label class="block mb-2 text-gray-800" for="confirm-password"
                  >Confirm Password</label
                >
                <input
                  class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  v-model="confirmPassword"
                  required
                />
              </div>
              <div class="mb-4" v-if="isSignup">
                <label class="block mb-2 text-gray-800" for="first-name">First Name</label>
                <input
                  class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                  type="text"
                  name="first-name"
                  id="first-name"
                  v-model="firstName"
                  required
                />
              </div>
              <div class="mb-4" v-if="isSignup">
                <label class="block mb-2 text-gray-800" for="last-name">Last Name</label>
                <input
                  class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                  type="text"
                  name="last-name"
                  id="last-name"
                  v-model="lastName"
                  required
                />
              </div>
              <div class="flex justify-between items-center">
                <button
                  class="px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  type="submit"
                >
                  {{ isSignup ? 'Sign Up' : 'Log In' }}
                </button>
                <button
                  class="text-blue-500 hover:text-blue-600 focus:outline-none"
                  type="button"
                  @click="toggleSignup"
                >
                  {{
                    isSignup ? 'Already have an account? Log In' : "Don't have an account? Sign Up"
                  }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      isSignup: false
    }
  },
  methods: {
    handleSubmit() {
      // handle form submission here
      if (this.isSignup) {
        console.log(
          `Submitting sign up form with email: ${this.email}, username: ${this.username}, password: ${this.password}, confirm password: ${this.confirmPassword}, first name: ${this.firstName}, and last name: ${this.lastName}`
        )
        // send request to sign up endpoint with user data

        // show success alert
        alert('Successfully signed up! You will now be redirected to the login page.')

        // redirect to login page
        this.$router.push('/login')
      } else {
        console.log(
          `Submitting login form with username: ${this.username} and password: ${this.password}`
        )
        // send request to login endpoint with user data

        // show success alert
        alert('Successfully logged in!')

        // redirect to dashboard page (replace with your desired page)
        this.$router.push('/dashboard')
      }
    },
    toggleSignup() {
      this.isSignup = !this.isSignup
    }
  }
}
</script>
<style>
/* Add custom styles here */
</style>
