<template>
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen">
            <div class="bg-white relative flex justify-center items-center my-20 flex-col rounded-lg shadow-lg px-14 py-20 w-5/6">
            <i  @click="closeModal" class="fa-solid fa-xmark absolute top-10 right-10 text-slate-600 text-2xl cursor-pointer"></i>
            <form @submit.prevent="submitForm" class="flex flex-row gap-3 flex-wrap w-full">
                <h1 class="text-2xl text-slate-600 uppercase font-bold mb-6 w-full">Add Record</h1>
                <div class="flex flex-row w-full gap-5">
                    <div class="mb-4 w-1/4">
                        <label for="name" class="text-slate-600 font-bold mb-1 block">Patient :</label>
                        <select v-model="patient" class="block w-full mt-1 rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50">
                            <option value="" disabled selected>Select Patient</option>
                            <option v-for="(item, index) in patientList" :key="index" value={{ item }} disabled selected>{{item}}</option>
                        </select>
                    </div>
                    <div class="mb-4 w-1/4">
                        <label for="name" class="text-slate-600 font-bold mb-1 block">Mutation :</label>
                        <select v-model="patient" class="block w-full mt-1 rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50">
                            <option value="" disabled selected>Select Mutation</option>
                            <option v-for="(item, index) in mutationsList" :key="index" value={{ item }} disabled selected>{{item}}</option>
                        </select>
                    </div>
                </div>
                <div class="mb-4 flex-2">
                    <label for="ledv" class="text-slate-600 font-bold mb-1 block">LEDV:</label>
                    <input type="number" step="0.01" id="ledv" v-model.number="ledv" required class="w-full shadow border rounded py-2 px-3">
                </div>
                <div class="mb-4 flex-2">
                    <label for="lesv" class="text-slate-600 font-bold mb-1 block">LESV:</label>
                    <input type="number" step="0.01" id="lesv" v-model.number="lesv" required class="w-full shadow border rounded py-2 px-3">
                </div>
                
                <div class="mb-4 flex-2">
                    <label for="lsv" class="text-slate-600 font-bold mb-1 block">LSV:</label>
                    <input type="number" step="0.01" id="lsv" v-model.number="lsv" required class="w-full shadow border rounded py-2 px-3">
                </div>
                
                <div class="mb-4 flex-2">
                    <label for="lvef" class="text-slate-600 font-bold mb-1 block">LVEF:</label>
                    <input type="number" step="0.01" id="lvef" v-model.number="lvef" required class="w-full shadow border rounded py-2 px-3">
                </div>
                
                <div class="mb-4 flex-2">
                    <label for="lvmass" class="text-slate-600 font-bold mb-1 block">LVMASS:</label>
                    <input type="number" step="0.01" id="lvmass" v-model.number="lvmass" required class="w-full shadow border rounded py-2 px-3">
                </div>
                
                <div class="mb-4 flex-2">
                    <label for="redv" class="text-slate-600 font-bold mb-1 block">REDV:</label>
                    <input type="number" step="0.01" id="redv" v-model.number="redv" required class="w-full shadow border rounded py-2 px-3">
                </div>
        
                <div class="mb-4 flex-2">
                    <label for="resv" class="text-slate-600 font-bold mb-1 block">RESV:</label>
                    <input type="number" step="0.01" id="resv" v-model.number="resv" required class="w-full shadow border rounded py-2 px-3">
                </div>
                
                <div class="mb-4 flex-2">
                    <label for="rsv" class="text-slate-600 font-bold mb-1 block">RSV:</label>
                    <input type="number" step="0.01" id="rsv" v-model.number="rsv" required class="w-full shadow border rounded py-2 px-3">
                </div>
            
                <div class="mb-4 flex-2">
                    <label for="rvef" class="text-slate-600 font-bold mb-1 block">RVEF:</label>
                    <input type="number" step="0.01" id="rvef" v-model.number="rvef" required class="w-full shadow border rounded py-2 px-3">
                </div>
                
                <div class="flex h-fit my-auto flex-row w-full gap-5 justify-start">
                    <label for="apicalHCM" class="text-slate-600 font-bold">Apical HCM:</label>
                    <input type="checkbox" id="apicalHCM" v-model.number="apicalHCM" required class="rounded">
                </div>

                <div class="text-right w-full">
                <button type="submit" class="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>
</template>

<script>
import {query, collection, firebaseFireStore, getDocs} from '../../firebase/database'
    export default {
    name: 'AddRecordComponent',
    props: ['isRecordModal'],
    data() {
        return {
        patient: '',
        apicalHCM: null,
        ledv: null,
        lesv: null,
        lsv: null,
        lvef: null,
        lvmass: null,
        redv: null,
        resv: null,
        rsv: null,
        rvef: null,
        patientList: [],
        mutationsList: [],
        }
    },
    methods: {
        submitForm() {
        // do something with the form data, e.g. make an API call to save the patient data
        },
        closeModal() {
          this.$emit('close-record-modal');
        }
    },
    async created(){
        const db = firebaseFireStore;
        let q = query(collection(db, "patients"));
        let querySnapshot = await getDocs(q);
        let ids = [];
        querySnapshot.forEach((doc) => {
            ids.push(doc.id);
        });
        this.patientList = ids;
        
        q = query(collection(db, "mutations"));
        querySnapshot = await getDocs(q);
        ids = [];
        querySnapshot.forEach((doc) => {
            ids.push(doc.id);
        });
        this.mutationsList = ids;
    }
}
</script>
        