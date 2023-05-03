<template>
<div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-white my-20 relative flex justify-center items-center flex-col rounded-lg shadow-lg py-20 px-20 w-5/6">
        <i @click="closeModal" class="fa-solid fa-xmark absolute top-10 right-10 text-slate-600 text-2xl cursor-pointer"></i>
        <form @submit.prevent="submitForm" class="flex flex-row flex-wrap gap-6 w-full">
          <h1 class="text-3xl text-slate-600 uppercase font-bold mb-6 w-full">Add Patient</h1>
          <div class="mb-4">
            <label for="name" class="text-slate-600 font-bold block">Name:</label>
            <input type="text" id="name" v-model="name" required class="w-full shadow border rounded py-2 px-3">
          </div>
          <div class="mb-4">
            <label for="age" class="text-slate-600 font-bold block">Age:</label>
            <input type="number" id="age" v-model.number="age" required class="w-full shadow border rounded py-2 px-3">
          </div>
          <div class="mb-4">
            <label for="age_at_mri" class="text-slate-600 font-bold block">Age at MRI:</label>
            <input type="number" id="age_at_mri" v-model.number="ageAtMRI" required class="w-full shadow border rounded py-2 px-3">
          </div>
          <div class="mb-4">
            <label for="gender" class="text-slate-600 font-bold block">Gender:</label>
            <select id="gender" v-model="gender" required class="w-full shadow border rounded py-2 px-3">
              <option value="true">Male</option>
              <option value="false">Female</option>
            </select>
          </div>
          <div class="mb-4 w-full">
            <div class="">
              <input type="checkbox" id="scar" v-model="scar" required class="text-slate-600 mr-2 font-bold mb-1 inline-block">
              <label for="scar" class="text-slate-600 font-bold">Scar:</label>
            </div>
            <div class="">
              <input type="checkbox" id="sudden_cardiac_death" v-model="suddenCardiacDeath" class="mr-2">
              <label for="sudden_cardiac_death" class="text-slate-600 font-bold mb-1 inline-block">Sudden Cardiac Death:</label>
            </div>
            <div class="">
              <input type="checkbox" id="hypertension" v-model="hypertension" class="mr-2">
              <label for="hypertension" class="text-slate-600 font-bold mb-1 inline-block">Hypertension:</label>
            </div>
            <div class="">
              <input type="checkbox" id="diabetes" v-model="diabetes" class="mr-2">
              <label for="diabetes" class="text-slate-600 font-bold mb-1 inline-block">Diabetes:</label>
            </div>
            <div class="">
              <input type="checkbox" id="myectomy" v-model="myectomy" class="mr-2">
              <label for="myectomy" class="text-slate-600 font-bold mb-1 inline-block">Myectomy:</label>
            </div>
          </div>

          <div class="text-right">
            <button type="submit" class="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
   </div>
</template>
  
<script>
import { getFirestore, app, collection, addDoc, doc } from '../../firebase/database'

export default {
  name: 'AddPatientComponent',
  data() {
    return {
      name: '',
      age: null,
      ageAtMRI: null,
      gender: true,
      suddenCardiacDeath: false,
      hypertension: false,
      diabetes: false,
      myectomy: false,
      scar: ''
    }
  },
  mounted() {
    console.log('Current User:', this.currentUser)
  },
  methods: {
    async submitForm() {
      // do something with the form data, e.g. make an API call to save the patient data
      const firestore = getFirestore(app)
      const patientsCollection = collection(firestore, 'patients')
      const usersCollection = collection(firestore, 'users')

      try {
        await addDoc(patientsCollection, {
          name: this.name,
          age: this.age,
          ageAtMRI: this.ageAtMRI,
          gender: this.gender === 'true',
          suddenCardiacDeath: this.suddenCardiacDeath,
          hypertension: this.hypertension,
          diabetes: this.diabetes,
          myectomy: this.myectomy,
          scar: this.scar,
        })

        this.name = ''
        this.age = null
        this.ageAtMRI = null
        this.gender = 'true'
        this.suddenCardiacDeath = false
        this.hypertension = false
        this.diabetes = false
        this.myectomy = false
        this.scar = ''
        this.userId = '0000001'

        this.closeModal()
      } catch (error) {
        console.error('Error adding patient: ', error)
      }
    },
    closeModal() {
      this.$emit('close-patient-modal')
    }
  }
}
</script>

