
<template>
  <div class="h-full flex justify-center items-center">
    <div class="flex justify-center w-1/3 mb-8">
        <div class="bg-white shadow-md w-full rounded px-24 py-16">
          <h2 class="text-2xl font-semibold mb-4">{{ isSignup ? 'Create Account' : 'Login' }}</h2>
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
            <div >
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
            <div >
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
            <div >
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
            <div >
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
            <div >
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
            <div >
              <label class="block mb-2 text-gray-800" for="institute">Institute</label>
              <input
                class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                type="text"
                name="institute"
                id="institute"
                v-model="institute"
                required
              />
            </div>
            <div class="flex justify-between items-center">
              <button
                class="px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                type="submit"
              >
                {{ 'Sign Up' }}
              </button>
              <button
                class="text-blue-500 hover:text-blue-600 focus:outline-none"
                type="button"
                @click="isSignup "
              >
              </button>
            </div>
          </form>
        </div>
    </div>
  </div>
</template>
<script>
import {signInWithEmailAndPassword, createUserWithEmailAndPassword , doc, firebaseAuthentication, firebaseFireStore , setDoc} from '../firebase/database'


export default {
data() {
  return {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    isSignup: true
  }
},
methods: {
  handleSubmit() {
    // handle form submission here
    if (this.isSignup) {
      console.log(
        `Submitting sign up form with email: ${this.email}, username: ${this.username}, password: ${this.password}, confirm password: ${this.confirmPassword}, first name: ${this.firstName}, and last name: ${this.lastName}`
      )
      // create a new user in Firestore
      createUserWithEmailAndPassword(firebaseAuthentication, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          const userData = {
            email: this.email,
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            institute: this.institute,
            role: "user",
          }
          console.log("Firestore object:", firebaseFireStore);
          console.log("User data:", userData);
          return setDoc(doc(firebaseFireStore, 'users', user.uid), userData)
        })
        .then(() => {
          // show success alert
          alert('Successfully signed up! You will now be redirected to the login page.')
          // redirect to login page
          this.$router.push('/login')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(`Signup error: ${errorCode} - ${errorMessage}`)
          // show error alert
          alert(`Signup error: ${errorCode} - ${errorMessage}`)
        })
    } else {
      console.log(  
        `Submitting login form with username: ${this.username} and password: ${this.password}`
      )
      // sign in user with email and password in Firestore
      signInWithEmailAndPassword(firebaseAuthentication, this.email, this.password)
        .then(() => {
          // show success alert
          alert('Successfully logged in!')
          // redirect to dashboard page (replace with your desired page)
          this.$router.push('/')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(`Login error: ${errorCode} - ${errorMessage}`)
          // show error alert
          alert(`Login error: ${errorCode} - ${errorMessage}`)
        })
    }
  }
}
}
</script>
<style>
/* Add custom styles here */
</style>
