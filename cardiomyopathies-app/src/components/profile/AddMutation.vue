<template>
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen">
            <div class="bg-white relative flex justify-center items-center my-20 flex-col rounded-lg shadow-lg px-14 py-20 w-5/6">
            <i  @click="closeModal" class="fa-solid fa-xmark absolute top-10 right-10 text-slate-600 text-2xl cursor-pointer"></i>
            <form @submit.prevent="submitForm" class="flex flex-row gap-8 flex-wrap">
                <h1 class="text-2xl text-slate-600 uppercase font-bold mb-6 w-full">Add Mutation</h1>
                <div class="flex h-fit my-auto flex-row gap-2 text-center justify-center">
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
                <div class="text-right w-full">
                <button type="submit" class="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>
</template>

<script>
    import { firebaseFireStore, collection, addDoc , where, getDocs, query} from '../../firebase/database'


    export default {
    name: 'AddMutationComponent',
    data() {
        return {
            actc: false,
            mybpc3:false,
            myh7:false,
            myl2:false,
            tnnci:false,
            tnni3:false,
            tnnt2:false,
            tpm1:false,
            ttn:false,
        }
    },
    methods: {
        async submitForm() {
            const record = {
                actc: this.actc,
                mybpc3: this.mybpc3,
                myh7: this.myh7,
                myl2: this.myl2,
                tnnci: this.tnnci,
                tnni3: this.tnni3,
                tnnt2: this.tnnt2,
                tpm1: this.tpm1,
                ttn: this.ttn,
            };

            console.log(record);

            const collectionRef = collection(firebaseFireStore, 'mutations')

            const q = query(collectionRef, 
                where('actc', '==', this.actc),
                where('mybpc3', '==', this.mybpc3),
                where('myh7', '==', this.myh7),
                where('myl2', '==', this.myl2),
                where('tnnci', '==', this.tnnci),
                where('tnni3', '==', this.tnni3),
                where('tnnt2', '==', this.tnnt2),
                where('tpm1', '==', this.tpm1),
                where('ttn', '==', this.ttn),
            );
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                addDoc(collectionRef, record)
                .then(() => {
                    this.closeModal();
                })
                .catch((error) => {
                console.log(error);
                });
            } else {
                console.log("Mutation not unique");
            }
        },
           
        closeModal() {
            this.$emit('close-mutation-modal');
            }
        }
    }
    </script>
        