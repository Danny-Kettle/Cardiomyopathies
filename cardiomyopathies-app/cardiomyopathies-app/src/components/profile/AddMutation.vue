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
                    <input type="checkbox" id="actc" v-model.number="actc" required class="rounded">
                </div>
                <div class="flex h-fit my-auto flex-row gap-2 text-center justify-center">
                    <label for="mybpc3" class="text-slate-600 font-bold">MYBPC3:</label>
                    <input type="checkbox" id="mybpc3" v-model.number="mybpc3" required class="rounded">
                </div>
                <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                    <label for="myh7" class="text-slate-600 font-bold">MYH7:</label>
                    <input type="checkbox" id="myh7" v-model.number="myh7" required class="rounded">
                </div>
                <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                    <label for="myl2" class="text-slate-600 font-bold">MYL2:</label>
                    <input type="checkbox" id="myl2" v-model.number="myl2" required class="rounded">
                </div>
                <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                    <label for="tnnci" class="text-slate-600 font-bold">TNNCI:</label>
                    <input type="checkbox" id="tnnci" v-model.number="tnnci" required class="rounded">
                </div>
                <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                    <label for="tnni3" class="text-slate-600 font-bold">TNNI3:</label>
                    <input type="checkbox" id="tnni3" v-model.number="tnni3" required class="rounded">
                </div>
                <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                    <label for="tnnt2" class="text-slate-600 font-bold">TNNT2:</label>
                    <input type="checkbox" id="tnnt2" v-model.number="tnnt2" required class="rounded">
                </div>
                <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                    <label for="tpm1" class="text-slate-600 font-bold">TPM1:</label>
                    <input type="checkbox" id="tpm1" v-model.number="tpm1" required class="rounded">
                </div>
                <div class="flex h-fit my-auto flex-row  gap-2 text-center justify-center">
                    <label for="ttn" class="text-slate-600 font-bold">TTN:</label>
                    <input type="checkbox" id="ttn" v-model.number="ttn" required class="rounded">
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
    export default {
    name: 'AddMutationComponent',
    data() {
        return {
            actc: null,
            mybpc3:null,
            myh7:null,
            myl2:null,
            tnnci:null,
            tnni3:null,
            tnnt2:null,
            tpm1:null,
            ttn:null,
        }
    },
    methods: {
        submitForm() {
        // do something with the form data, e.g. make an API call to save the patient data
        },
        closeModal() {
          this.$emit('close-mutation-modal');
        }
    }
    }
</script>
        