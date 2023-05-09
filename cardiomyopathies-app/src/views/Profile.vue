<template>
  <div class="flex flex-col pt-20 h-94 mx-auto justify-center sm:w-11/12 lg:w-5/6 pb-20">
    <div class="flex sm:justify-start justify-center items-center gap-4 sm:gap-8 mb-10">
      <div class="flex-row flex w-10/12 sm:w-full gap-4 sm:gap-8">
        <i v-if="!isDoctor" class="fas fa-user text-slate-600 text-2xl sm:text-4xl lg:text-6xl"></i>
        <i v-if="isDoctor" class="fas fa-user-doctor text-slate-600 text-2xl sm:text-4xl lg:text-6xl"></i>
        <h1 class="text-2xl sm:text-4xl lg:text-6xl text-slate-600 self-end font-bold">{{ user.username }}</h1>
      </div>
    </div>
    <div class="bg-gray-100 flex flex-col items-center sm:justify-start sm:px-5 sm:py-12 lg:p-20 shadow-none sm:shadow-xl">
        <div class="w-10/12 flex flex-col sm:w-full gap-4 sm:gap-8">
          <h2 class="font-bold text-lg sm:text-xl lg:text-3xl uppercase text-slate-600">Account</h2>
          <hr />
          <div class="flex flex-col gap-6 mb-10">
            <h2 class="font-bold text-md lg:text-xl text-slate-600 uppercase mb-4">General</h2>
            <div class="flex flex-row items-center text-xs md:text-sm">
              <label class="font-bold tracking-wider w-28 uppercase text-slate-600"
                >username</label
              >
              <input v-model="userData.username" class="px-3 py-1 shadow-sm rounded" />
            </div>
            <div class="flex flex-row text-xs md:text-sm items-center">
              <label class="font-bold w-28  tracking-wider uppercase text-slate-600"
                >First Name</label
              >
              <input v-model="userData.firstName" class="px-3 py-1 shadow-sm rounded" />
            </div>
            <div class="flex flex-row text-xs md:text-sm items-center">
              <label class="font-bold w-28 tracking-wider uppercase text-slate-600"
                >Last Name</label
              >
              <input v-model="userData.lastName" class="px-3 py-1 shadow-sm rounded" />
            </div>
            
            <div v-if="user.role === 'doctor'"  class="flex flex-row text-xs md:text-sm items-center">
              <label class="font-bold w-28 tracking-wider uppercase text-slate-600"
                >institute</label
              >
              <input v-model="userData.institute" class="px-3 py-1 shadow-sm rounded" />
            </div>
            <button
              @click="submitForm"
              class="rounded self-end bg-emerald-400 text-white py-4 px-4 font-bold text-xs uppercase transform duration-300 origin-center ease-in-out hover:scale-110 shadow"
            >
                    <span class="w-28">Save Account</span>
            </button>
          </div>
          <div class="flex flex-col gap-4 mb-10">
            <h2 class="font-bold text-xl text-slate-600 uppercase mb-4">Account Details</h2>
            <p
              class="font-bold text-sm cursor-pointer w-fit tracking-wider uppercase text-blue-800 transform hover:scale-110 origin-left duration-300 ease-in-out"
            >
              Change Email
            </p>
            <p
              class="font-bold text-sm cursor-pointer w-fit tracking-wider uppercase text-blue-800 transform hover:scale-110 origin-left duration-300 ease-in-out"
            >
              Reset Password
            </p>
            <p
              class="font-bold text-sm cursor-pointer w-fit tracking-wide uppercase text-blue-800 transform hover:scale-110 origin-left duration-300 ease-in-out"
            >
              I am a doctor
            </p>
          </div>
          <div v-if="user.role === 'doctor'" class="flex flex-col">
            <div class="flex flex-col w-full justify-between">
              <h2 class="font-bold text-xl text-slate-600 uppercase mb-4">Records</h2>
              <div class="flex flex-row flex-wrap gap-2 lg:gap-8">
                <button
                  @click="isTableModal = !isTableModal"
                  class="flex text-xs flex-row gap-4 py-4 px-4 bg-orange-400 rounded text-white justify-center items-center uppercase shadow font-bold transform duration-300 origin-center ease-in-out hover:scale-110"
                >
                  <span class="w-28 flex justify-between items-center"><i class="fa-solid fa-expand"></i> View Records</span>
                </button>
                <button
                  @click="isPatientTableModal = !isPatientTableModal"
                  class="flex text-xs flex-row gap-4 py-4 px-4 bg-indigo-400 rounded text-white justify-center items-center uppercase shadow font-bold transform duration-300 origin-center ease-in-out hover:scale-110"
                >
                  <span class="w-28 flex justify-between items-center"><i class="fa-solid fa-expand"></i> View Patients</span>
                </button>
                <button
                  @click="isRecordModal = !isRecordModal"
                  class="flex text-xs flex-row gap-4 py-4 px-4 bg-emerald-400 rounded text-white justify-center items-center uppercase shadow font-bold transform duration-300 origin-center ease-in-out hover:scale-110"
                >
                  <span class="w-28 flex justify-between items-center"><i class="fa fa-plus"></i> Add Record</span>
                </button>
                <button
                  @click="isPatientModal = !isPatientModal"
                  class="flex text-xs flex-row gap-4 py-4 px-4 bg-blue-400 rounded text-white justify-center items-center uppercase shadow font-bold transform duration-300 origin-center ease-in-out hover:scale-110"
                >
                <span class="w-28 flex justify-between items-center"><i class="fa fa-plus"></i> Add Patient</span>
                </button>
              </div>
            </div>
            <RecordsComponent v-if="isTableModal" @close-table-modal="isTableModal = !isTableModal" />
            <PatientsComponent v-if="isPatientTableModal" @close-patientTable-modal="isPatientTableModal = !isPatientTableModal" />
            <AddPatientComponent
              v-if="isPatientModal"
              @close-patient-modal="isPatientModal = !isPatientModal"
            />
            <AddRecordComponent
              v-if="isRecordModal"
              @close-record-modal="isRecordModal = !isRecordModal"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { updateUserStatus } from '../stores/utils'
import { eventBus } from '../stores/eventBus'
import {
  query,
  collection,
  firebaseFireStore,
  doc,
  getDocs,
  addDoc,
  setDoc,
  limit
} from '../firebase/database'
import RecordsComponent from '@/components/profile/Records.vue'
import AddPatientComponent from '@/components/profile/AddPatient.vue'
import AddRecordComponent from '@/components/profile/AddRecord.vue'
import PatientsComponent from '@/components/profile/Patients.vue'

export default {
  name: 'Profile',
  components: {
    RecordsComponent,
    PatientsComponent,
    AddPatientComponent,
    AddRecordComponent,
  },
  data() {
    return {
      user: {
        email: this.$cookies.get('email'),
        role: this.$cookies.get('role'),
        username: '',
        firstName: '',
        lastName: '',
        institute: ''
      },
      isPatientModal: false,
      isPatientTableModal: false,
      isRecordModal: false,
      isTableModal: false,
    }
  },
  methods: {
    submitForm() {
      const uid = this.$cookies.get('uid')
      const email = this.$cookies.get('email')
      const role = this.$cookies.get('role')
      const userRef = doc(collection(firebaseFireStore, 'users'), uid)

      const user = {
        email: this.userData.email,
        username: this.userData.username,
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        institute: this.userData.institute,
        role: this.userData.role
      }

      console.log(user)

      setDoc(userRef, user)

      sessionStorage.setItem('user', JSON.stringify(user))
      eventBus.emit('user-changed')
    }
  },
  setup() {
    const router = useRouter()
    const user = ref(updateUserStatus())
    const isDoctor = user.value.role !== 'doctor' ? false : true

    const capitalizedFirstName = computed(() => {
      return (
        user.value.firstName.charAt(0).toUpperCase() + user.value.firstName.slice(1).toLowerCase()
      )
    })

    onMounted(() => {
      user.value = updateUserStatus()
      console.log(user.value)
      eventBus.on('user-changed', () => {
        user.value = updateUserStatus()
      })
    })

    // Initialize the user data property
    const userData = ref({
      username: user.value.username,
      firstName: user.value.firstName,
      lastName: user.value.lastName,
      institute: user.value.institute,
      email: user.value.email,
      role: user.value.role

    })

    return {
      user,
      userData,
      capitalizedFirstName,
      isDoctor
    }
  }
}
</script>