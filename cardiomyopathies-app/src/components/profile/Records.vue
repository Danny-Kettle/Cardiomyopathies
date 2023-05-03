  <!-- Expand patient
    Expand Mutation
    Make dropdown for  patient selection dynamic 
    Add Mutation part to creating a record 

  -->

  <template>
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10">
      <i @click="closeModal" class="fa-solid fa-xmark absolute z-10 top-10 right-10 text-white text-2xl cursor-pointer"></i>
    </div>
    <div class="fixed z-10 overflow-x-hidden inset-0 my-20">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="sticky top-0 bg-slate-600">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Patient</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Apical HCM</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">LEDV</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">LESV</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">LSV</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">LVEF</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">LVMASS</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">REDV</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">RESV</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">RSV</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">RVEF</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Mutations</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Edit</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Delete</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 text-xs" v-for="(item, index) in collectionData" :key="index" >
                  <tr :class="(index % 2 === 0) ? 'bg-gray-100' : 'bg-white'">
                    <td @input="item.patient = $event.target.innerText" :contenteditable="isEditable(index)" 
                      :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">
                    {{ item.patientName }}
                    </td>     
                    <td @input="item.patient = $event.target.innerText" :contenteditable="isEditable(index)" :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.apicalHCM }}</td>
                    <td @input="item.ledv = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.ledv }}</td>
                    <td @input="item.lesv = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.lesv }}</td>
                    <td @input="item.lsv = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.lsv }}</td>
                    <td @input="item.lvef = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.lvef }}</td>
                    <td @input="item.lvmass = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.lvmass }}</td>
                    <td @input="item.redv = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.redv }}</td>
                    <td  @input="item.resv = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.resv }}</td>
                    <td @input="item.rsv = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.rsv }}</td>
                    <td  @input="item.rvef = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.rvef }}</td>
                    <td @input="item.mutations = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.mutations }}</td>
                    <td @click="isEditable(index) ? saveContent(index, item.docId) : editContent(index)" class="text-center border text-xl">
                      <i v-if="isEditable(index)" class="fas fa-save text-emerald-600 cursor-pointer hover:text-emerald-500"></i>
                      <i v-else class="fa-solid fa-pen-to-square text-orange-300 cursor-pointer hover:text-orange-100"></i>
                    </td>
                    <td @click="deleteRow(item.docId)" class="text-center border text-xl"><i class="fa-solid cursor-pointer hover:text-red-300 fa-trash text-red-500"></i></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</template>
  
    
    <script>
    import { firebaseFireStore, collection, query, getDocs, doc, deleteDoc, getDoc, where, setDoc } from "../../firebase/database";


    export default {
      name: 'RecordsComponent',
      data() {  
        return {
          collectionData: [],
        }
      }, methods: {
      closeModal() {
          this.$emit('close-table-modal');
      },
      deleteRow(id){
        const docRef = doc(firebaseFireStore, "experimental_data", id);
        deleteDoc(docRef);
        console.log("Document successfully deleted!");  
        // Remove the deleted record from collectionData
        const index = this.collectionData.findIndex(record => record.docId === id);
        if (index !== -1) {
          this.collectionData.splice(index, 1);
        }
      },
      editContent(index){
        this.collectionData[index].editable = !this.collectionData[index].editable;
      },
      isEditable(index) {
        return this.collectionData[index].editable;
      },
      saveContent(index, docId){

        const uid = this.$cookies.get('uid')
        const userRef = doc(collection(firebaseFireStore, 'users'), uid);
        const patientRef = doc(collection(firebaseFireStore, 'patients'), this.collectionData[index].patient);
        const mutationRef = doc(collection(firebaseFireStore, 'mutations'), this.collectionData[index].mutations);

        console.log(docId);

        const docRef = doc(collection(firebaseFireStore, 'experimental_data'), docId);


        const updatedData = {
        patient: patientRef,
        mutations: mutationRef,
        apicalHCM: Boolean(this.collectionData[index].apicalHCM),
        ledv: Number(this.collectionData[index].ledv),
        lesv: Number(this.collectionData[index].lesv),
        lsv: Number(this.collectionData[index].lsv),
        lvef: Number(this.collectionData[index].lvef),
        lvmass: Number(this.collectionData[index].lvmass),
        redv: Number(this.collectionData[index].redv),
        resv: Number(this.collectionData[index].resv),
        rsv: Number(this.collectionData[index].rsv),
        rvef: Number(this.collectionData[index].rvef),
        user: userRef,
        };

        console.log(updatedData);

        setDoc(docRef, updatedData)
        .then(() => {
          this.closeModal();
        })
        .catch((error) => {
          console.log(error);
        });
      }


    },
      async created() {
        const uid = this.$cookies.get('uid')

        const userRef = doc(collection(firebaseFireStore, 'users'), uid);
        const collectionRef = collection(firebaseFireStore, 'experimental_data')


        console.log(userRef);

        const q = query(
          collectionRef,
          where('user', '==', userRef)
        );
     
        const querySnapshot = await getDocs(q);
        
        for (const doc of querySnapshot.docs) {
          let data = doc.data();
          let patientRef = data.patient;
          let mutationRef = data.mutation;
          let mutationId = "NULL";
          let patientId = "NULL";
          let patientName = "NULL";
          
          if (patientRef) {
            const patientDoc = await getDoc(patientRef);
            patientId = patientDoc.id;
            patientName = patientDoc.data().name;
            console.log(patientName);
          }
          if (mutationRef) {
            const mutationDoc = await getDoc(mutationRef);
            mutationId = mutationDoc.id;
          }
          this.collectionData.push({ ...data, patient: patientId, mutations: mutationId, docId: doc.id , editable: false, patientName: patientName});
        }
    
        console.log(this.collectionData);
      }
    }
    </script>
    
    
    