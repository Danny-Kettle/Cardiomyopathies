<template>
<div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"></div>
  <div class="fixed z-50 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-white my-20 relative flex justify-center items-center flex-col rounded-lg shadow-lg py-20 px-20 w-11/12">
        <i @click="closeModal" class="fa-solid fa-xmark absolute top-10 right-10 text-slate-600 text-2xl cursor-pointer"></i>
        <form @submit.prevent="submitForm" class="flex flex-row overflow-auto flex-wrap gap-6 w-full">
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
              <input type="checkbox" id="scar" v-model="scar" class="text-slate-600 mr-2 font-bold mb-1 inline-block">
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
import { getFirestore, firebaseFireStore, app, collection, getDocs, setDoc, doc } from '../../firebase/database'

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
      scar: false,
    }
  },
  mounted() {
    console.log('Current User:', this.currentUser)
  },
  methods: {
    async submitForm() {
    const uid = this.$cookies.get('uid')
    const firestore = getFirestore(app)
    const patientsCollection = collection(firestore, 'patients')
    const userRef = doc(collection(firebaseFireStore, 'users'), uid)

    try {
      // Get the size of the patients collection
      const patientsSnapshot = await getDocs(patientsCollection)
      const patientCount = patientsSnapshot.size
      
      // Create a custom document reference using the patient count as it is zero indexed
      const patientRef = doc(patientsCollection, `${patientCount}`)
      
      // Add a new document with the custom reference
      await setDoc(patientRef, {
        name: this.name,
        age: this.age,
        age_at_mri: this.ageAtMRI,
        gender: this.gender,
        sudden_cardiac_death: this.suddenCardiacDeath,
        hypertension: this.hypertension,
        diabetes: this.diabetes,
        myectomy: this.myectomy,
        scar: this.scar,
        user: userRef
      })

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

