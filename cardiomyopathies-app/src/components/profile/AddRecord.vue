<template>
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"></div>
    <div class="fixed z-50 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen">
            <div class="bg-white relative flex justify-center items-center my-20 flex-col rounded-lg shadow-lg px-14 py-20 w-5/6">
            <i  @click="closeModal" class="fa-solid fa-xmark absolute top-10 right-10 text-slate-600 text-2xl cursor-pointer"></i>
            <form @submit.prevent="submitForm" class="flex flex-col gap-3 flex-wrap w-full">
                <h1 class="text-2xl text-slate-600 uppercase font-bold mb-6 w-full">Add Record</h1>
                <div class="flex flex-row w-full gap-5">
                    <div class="mb-4 w-3/4 lg:w-1/4">
                        <label for="patient" class="text-slate-600 font-bold mb-1 block">Patient :</label>
                        <select v-model="patient" class="block w-full mt-1 rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50">
                            <option value="" disabled selected>Select Patient</option>
                            <option v-for="(item, index) in patientList" :key="index" :value="item.id" selected>{{item.name}}</option>
                        </select>
                    </div>
                </div>
                <h2 class="text-slate-600 font-bold mb-1 block">Mutations :</h2>
                <div class="flex flex-row flex-wrap gap-8 mb-8 text-sm">
                    <div class="flex h-fit my-auto  flex-row gap-2 text-center justify-center">
                        <label for="actc" class="text-slate-600 font-bold">ACTC:</label>
                    <input type="checkbox" id="actc" v-model.number="actc"  class="rounded">
                    </div>
                    <div class="flex h-fit my-auto flex-row gap-2 text-center justify-center">
                        <label for="mybpc3" class="text-slate-600 font-bold">MYBPC3:</label>
                        <input type="checkbox" id="mybpc3" v-model.number="mybpc3"  class="rounded">
                    </div>
                    <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                        <label for="myh7" class="text-slate-600 font-bold">MYH7:</label>
                        <input type="checkbox" id="myh7" v-model.number="myh7" class="rounded">
                    </div>
                    <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                        <label for="myl2" class="text-slate-600 font-bold">MYL2:</label>
                        <input type="checkbox" id="myl2" v-model.number="myl2"  class="rounded">
                    </div>
                    <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                        <label for="tnnci" class="text-slate-600 font-bold">TNNCI:</label>
                        <input type="checkbox" id="tnnci" v-model.number="tnnci"  class="rounded">
                    </div>
                    <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                        <label for="tnni3" class="text-slate-600 font-bold">TNNI3:</label>
                        <input type="checkbox" id="tnni3" v-model.number="tnni3"  class="rounded">
                    </div>
                    <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                        <label for="tnnt2" class="text-slate-600 font-bold">TNNT2:</label>
                        <input type="checkbox" id="tnnt2" v-model.number="tnnt2"  class="rounded">
                    </div>
                    <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                        <label for="tpm1" class="text-slate-600 font-bold">TPM1:</label>
                        <input type="checkbox" id="tpm1" v-model.number="tpm1"  class="rounded">
                    </div>
                    <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                        <label for="ttn" class="text-slate-600 font-bold">TTN:</label>
                        <input type="checkbox" id="ttn" v-model.number="ttn"  class="rounded">
                    </div>
                </div>
                <h2 class="text-slate-600 font-bold  mb-1 block">Heart Data :</h2>
                <div class="flex flex-row flex-wrap gap-8 text-sm">
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
                </div>
                <div class="flex h-fit my-auto flex-row w-full gap-5 justify-start">
                    <label for="apicalHCM" class="text-slate-600 font-bold">Apical HCM:</label>
                    <input type="checkbox" id="apicalHCM" v-model.number="apicalHCM" class="rounded">
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
import {query, collection, firebaseFireStore, where, doc, getDocs, addDoc, limit} from '../../firebase/database'
import { ref } from 'vue'
import { updateUserStatus } from '../../stores/utils' 

const user = ref(updateUserStatus())

    export default {
    name: 'AddRecordComponent',
    props: ['isRecordModal'],
    data() {
        return {
        patient: '',
        mutation: '',
        apicalHCM: false,
        ledv: null,
        lesv: null,
        lsv: null,
        lvef: null,
        lvmass: null,
        redv: null,
        resv: null,
        rsv: null,
        rvef: null,
        actc: false,
        mybpc3:false,
        myh7:false,
        myl2:false,
        tnnci:false,
        tnni3:false,
        tnnt2:false,
        tpm1:false,
        ttn:false,
        patientList: [{ name: '', id: '' }],
        }
    },
    methods: {
        submitForm() {
            const uid = this.$cookies.get('uid')
            const userRef = doc(collection(firebaseFireStore, 'users'), uid);
            const patientRef = doc(collection(firebaseFireStore, 'patients'), this.patient);

            const record = {
            patient: patientRef, 
            ledv: this.ledv,
            lesv: this.lesv,
            lsv: this.lsv,
            lvef: this.lvef,
            lvmass: this.lvmass,
            redv: this.redv,
            resv: this.resv,
            rsv: this.rsv,
            rvef: this.rvef,
            apicalHCM: this.apicalHCM,
            actc: this.actc,
            mybpc3: this.mybpc3,
            myh7: this.myh7,
            myl2: this.myl2,
            tnnci: this.tnnci,
            tnni3: this.tnni3,
            tnnt2: this.tnnt2,
            tpm1: this.tpm1,
            ttn: this.ttn,
            user:  userRef,
        };

        console.log(record);

        const collectionRef = collection(firebaseFireStore, 'experimental_data_mutations')


        addDoc(collectionRef, record)
        .then(() => {
          this.closeModal();
        })
        .catch((error) => {
          console.log(error);
        });
        
        },
        closeModal() {
          this.$emit('close-record-modal');
        }
    },

    async created(){
        
        const uid = this.$cookies.get('uid')
        
        const userRef = doc(collection(firebaseFireStore, 'users'), uid);
        let collectionRef = collection(firebaseFireStore, 'patients');

        const q = query(collectionRef, where('user', '==', userRef));

        let querySnapshot = await getDocs(q);

        let ids = [];

        querySnapshot.forEach((doc) => {
            const name = doc.data().name ? doc.data().name : doc.id;
            const id = doc.id;
            ids.push({ name, id });
        });
        this.patientList = ids;
    }
}
</script>
        