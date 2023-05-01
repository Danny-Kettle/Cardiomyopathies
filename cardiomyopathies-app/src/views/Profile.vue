<template>
    <div class="bg-black-500 flex flex-col pt-20 h-94 mx-auto w-5/6 pb-20">
        <div class="flex flex-row justify-start gap-8 mb-10">
        <i v-if=!isDoctor class="fas fa-user text-slate-600 text-6xl" ></i>
        <i v-if=isDoctor class="fas fa-user-doctor text-slate-600 text-6xl"></i>
        <h1 class="text-6xl text-slate-600 self-end font-bold">{{ user.username }}</h1>
        </div>
        <div class="bg-gray-100 flex flex-col gap-8 p-20 shadow-xl">
            <h2 class="font-bold text-3xl uppercase text-slate-600">Account</h2>
            <hr/>
            <div class="flex flex-col gap-6 mb-10">
                <h2 class="font-bold text-xl text-slate-600 uppercase mb-4">General</h2>
                <div class="flex flex-row items-center">
                    <label class="font-bold text-sm tracking-wider w-28 uppercase text-slate-600 ">username</label>
                    <input class="px-3 py-1 shadow-sm rounded" :value=user.username />
                </div>
                <div class="flex flex-row items-center">
                    <label class="font-bold w-28 text-sm tracking-wider uppercase text-slate-600 ">First Name</label>
                    <input class="px-3 py-1 shadow-sm rounded" :value=user.firstName />
                </div>
                <div class="flex flex-row items-center">
                    <label class="font-bold w-28 text-sm tracking-wider uppercase text-slate-600 ">Last Name</label>
                    <input class="px-3 py-1 shadow-sm rounded" :value=user.lastName />
                </div>
                <div class="flex flex-row items-center">
                    <label class="font-bold w-28 text-sm tracking-wider uppercase text-slate-600 ">institute</label>
                    <input class="px-3 py-1 shadow-sm rounded" :value=user.institute />
                </div>
                <button class="w-32 rounded self-end bg-emerald-400 text-white py-4 px-4 font-bold text-xs uppercase transform duration-300 origin-center ease-in-out hover:scale-110 shadow ">Save Account</button>    
            </div>
            <div class="flex flex-col gap-4 mb-10">
                <h2 class="font-bold text-xl text-slate-600 uppercase mb-4">Account Details</h2>
                <p class="font-bold text-sm cursor-pointer w-fit tracking-wider uppercase text-blue-800 transform hover:scale-110 origin-left duration-300 ease-in-out">Change Email</p>
                <p class="font-bold text-sm cursor-pointer w-fit tracking-wider uppercase text-blue-800 transform hover:scale-110 origin-left duration-300 ease-in-out">Reset Password</p>
                <p class="font-bold text-sm cursor-pointer w-fit tracking-wide uppercase text-blue-800 transform hover:scale-110 origin-left duration-300 ease-in-out">I am a doctor</p>
            </div>
            <div class="flex flex-col">
                <div class="flex flex-col w-full justify-between">
                    <h2 class="font-bold text-xl text-slate-600 uppercase mb-4">Records</h2>
                    <div class="flex flex-row gap-8">
                        <button @click="isTableModal = !isTableModal"  class="flex text-xs flex-row gap-4 py-4 px-4 bg-orange-400 rounded text-white justify-center items-center uppercase shadow font-bold transform duration-300 origin-center ease-in-out hover:scale-110"><i class="fa-solid fa-expand"></i> View Table</button>
                        <button @click="isRecordModal = !isRecordModal"  class="flex text-xs flex-row gap-4 py-4 px-4 bg-emerald-400 rounded text-white justify-center items-center uppercase shadow font-bold transform duration-300 origin-center ease-in-out hover:scale-110"><i class="fa fa-plus" /> Add Record</button>
                        <button @click="isMutationModal = !isMutationModal" class="flex text-xs flex-row gap-4 py-4 px-4 bg-indigo-400 rounded text-white justify-center items-center uppercase shadow font-bold transform duration-300 origin-center ease-in-out hover:scale-110"><i class="fa fa-plus" /> Add Mutation</button>
                        <button @click="isPatientModal = !isPatientModal" class="flex text-xs flex-row gap-4 py-4 px-4 bg-blue-400 rounded text-white justify-center items-center uppercase shadow font-bold transform duration-300 origin-center ease-in-out hover:scale-110"><i class="fa fa-plus" /> Add Patient</button>
                    </div>
                </div>
                <RecordsComponent v-if="isTableModal" @close-table-modal="isTableModal = !isTableModal" /> 
                <AddPatientComponent v-if="isPatientModal" @close-patient-modal="isPatientModal = !isPatientModal"/>
                <AddRecordComponent v-if="isRecordModal" @close-record-modal="isRecordModal = !isRecordModal"/>
                <AddMutationComponent v-if="isMutationModal" @close-mutation-modal="isMutationModal = !isMutationModal"/>
            </div>
        </div>
    </div>
</template>



<script>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { updateUserStatus } from '../stores/utils'
import {eventBus} from '../stores/eventBus';
import '@fortawesome/fontawesome-free/css/all.css';
import RecordsComponent from '@/components/profile/Records.vue';
import AddPatientComponent from '@/components/profile/AddPatient.vue';
import AddRecordComponent from '@/components/profile/AddRecord.vue';
import AddMutationComponent from '@/components/profile/AddMutation.vue';


export default {
  name: 'Profile',
  components: {
    RecordsComponent,
    AddPatientComponent,
    AddRecordComponent,
    AddMutationComponent
  },
  data() {
    return {
      isPatientModal: false,
      isRecordModal: false,
      isTableModal: false,
      isMutationModal: false,
    }
  },
  setup() {
    const router = useRouter()
    const user = ref(updateUserStatus())
    const isDoctor = user.value.role !== "doctor"  ? false : true

    const capitalizedFirstName = computed(() => {
      return user.value.firstName.charAt(0).toUpperCase() + user.value.firstName.slice(1).toLowerCase()
    })


    onMounted(() => {
      user.value = updateUserStatus()
      console.log(user.value);
      eventBus.on('user-changed', () => {
        user.value = updateUserStatus()
      })
    })

    return {
        user, capitalizedFirstName, isDoctor
    }   
}}

</script>