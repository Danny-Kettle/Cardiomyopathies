<template>
    <div class="h-full flex justify-center items-center">
      <div class="flex justify-center w-1/2 mb-8">
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
              <div class="mb-4" v-if="isSignup">
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
              <div class="mb-4" v-if="isSignup">
                <label class="block mb-2 text-gray-800" for="role">Profession</label>
                <select class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400" name="role" id="role" v-model="role" required>
                  <option value="" disabled selected>Select profession</option>
                  <option value="doctor">Doctor</option>
                  <option value="guest">Guest</option>
                </select>
              </div>
              <div class="mb-4" v-if="isSignup && isDoctor">
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
              <div class="flex justify-between mb-4 items-center">
                <button
                  class="px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  type="submit"
                >
                  {{ isSignup ? 'Sign Up' : 'Log In' }}
                </button>
                <button
                  class="text-blue-500 hover:text-blue-600 focus:outline-none"
                  type="button"
                  @click="isSignup = !isSignup"
                >
                  {{
                    isSignup ? 'Already have an account? Log In' : "Don't have an account? Sign Up"
                  }}
                </button>
              </div>
              <div class="mb-4 flex justify-end" v-if="!isSignup">
                <router-link to="/reset-password" class="text-blue-400">Forgot password?</router-link>
              </div>
            </form>
          </div>
      </div>
    </div>
</template>
<script>
import {signInWithEmailAndPassword, createUserWithEmailAndPassword , getDocs, collection, query, where, doc, firebaseAuthentication, firebaseFireStore , setDoc} from '../firebase/database'
import {eventBus} from '../stores/eventBus';


//Add this in the higher level component for global use 


export default {
  props: {
    user: Object
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      role: '',
      isSignup: false,
      isDoctor: false
    }
  },
  watch: {
    role() {
      this.isDoctor = this.role === 'doctor';
    }
  },
  methods: {
    // Put into Stores
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
              role: this.role == "Doctor" ? this.role.toLowerCase() : "user", 
            }
            console.log("Firestore object:", firebaseFireStore);
            console.log("User data:", userData);
            return setDoc(doc(firebaseFireStore, 'users', user.uid), userData)
          })
          .then(() => {
            // show success alert
            alert('Successfully signed up! You will now be redirected to the login page.')
            // redirect to login page
            this.isSignup = false;
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
          `Submitting login form with username: ${this.email} and password: ${this.password}`
        )
        // sign in user with email and password in Firestore
        signInWithEmailAndPassword(firebaseAuthentication, this.email, this.password)
          .then(async (userCredential) => {
            const db = firebaseFireStore;
            const q = query(collection(db, "users"), where("email", "==", this.email));
            const querySnapshot = await getDocs(q);

            //Make ID use a token to prevent showing the uid to the user 
            
            if (!querySnapshot.empty) {
            const docSnapshot = querySnapshot.docs[0];
            const docId = docSnapshot.id;
            const userData = {
              email: this.email,
              username: docSnapshot.data().username,
              firstName: docSnapshot.data().firstName,
              lastName: docSnapshot.data().lastName,
              institute: docSnapshot.data().institute,
              role: docSnapshot.data().role,
            };
              // document.cookie = `uid=${{docId}}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
              this.$cookies.set('uid', docId, { expires: 0 })
              sessionStorage.setItem("user", JSON.stringify(userData));
              eventBus.emit('user-changed');
              this.$router.push('/');
            };
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
