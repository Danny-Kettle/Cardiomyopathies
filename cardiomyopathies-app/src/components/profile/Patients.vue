  <!-- Expand patient
    Expand Mutation
    Make dropdown for  patient selection dynamic 
    Add Mutation part to creating a record 

  -->

  <template>
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
      <i @click="closeModal" class="fa-solid fa-xmark absolute z-50 top-10 right-10 text-white text-2xl cursor-pointer"></i>
    </div>
    <div class="fixed h-fit z-50 inset-0 my-20">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow border-b border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="sticky top-0 bg-slate-600">
                <tr>
                  <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Name</th>
                  <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Age</th>
                  <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Age at MRI</th>
                  <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Gender</th>
                  <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Scar</th>
                  <th scope="col" class="px-3 6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Sudden Cardiac Death</th>
                  <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Hypertension</th>
                  <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Diabetes</th>
                  <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Myectomy</th>
                  <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Edit</th>
                  <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">Delete</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 text-xs" v-for="(item, index) in collectionData" :key="index" >
                  <tr :class="(index % 2 === 0) ? 'bg-gray-100' : 'bg-white'">
                    <td @input="item.name = $event.target.innerText" :contenteditable="isEditable(index)" 
                      :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.name }}</td>     
                    <td @input="item.age = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.age }}</td>
                    <td @input="item.age_at_mri = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.age_at_mri }}</td>
                    <td @input="item.gender = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.gender === false ? "Male" : "Female"  }}</td>
                    <td @input="item.scar = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.scar }}</td>
                    <td @input="item.sudden_cardiac_death = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.sudden_cardiac_death }}</td>
                    <td @input="item.hypertension = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.hypertension }}</td>
                    <td @input="item.diabetes = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.diabetes }}</td>
                    <td  @input="item.myectomy = $event.target.innerText" :contenteditable="isEditable(index)" 
                    :class="['px-4', 'py-2', isEditable(index) ? 'border-orange-300 border-2' : '']">{{ item.myectomy }}</td>
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
      name: 'PatientsComponent',
      data() {  
        return {
          collectionData: [],
        }
      }, methods: {
      closeModal() {
          this.$emit('close-patientTable-modal');
      },
      deleteRow(id){
        const docRef = doc(firebaseFireStore, "patients", id);
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

        const docRef = doc(collection(firebaseFireStore, 'patients'), docId);

        const gender = this.collectionData[index].gender.toLowerCase() === "male" ? false : true;

        const updatedData = {
        name: this.collectionData[index].name,
        age: Number(this.collectionData[index].age),
        age_at_mri: Number(this.collectionData[index].age_at_mri),
        gender: gender,
        scar: Boolean(this.collectionData[index].scar),
        sudden_cardiac_death: Boolean(this.collectionData[index].sudden_cardiac_death),
        hypertension: Boolean(this.collectionData[index].hypertension),
        diabetes: Boolean(this.collectionData[index].diabetes),
        myectomy: Boolean(this.collectionData[index].myectomy),
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
        const collectionRef = collection(firebaseFireStore, 'patients')


        console.log(userRef);

        const q = query(
          collectionRef,
          where('user', '==', userRef)
        );
     
        const querySnapshot = await getDocs(q);
        
        for (const doc of querySnapshot.docs) {
          let data = doc.data();
    
          this.collectionData.push({ ...data,  docId: doc.id , editable: false});
        }
    
        console.log(this.collectionData);
      }
    }
    </script>
    
    
    