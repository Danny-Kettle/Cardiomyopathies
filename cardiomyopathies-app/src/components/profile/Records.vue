  <!-- Expand patient
    Expand Mutation
    Make dropdown for patient selection dynamic 
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
                    <td class="px-4 py-2 border">{{ item.patient }}</td>
                    <td class="px-4 py-2 border">{{ item.apicalHCM }}</td>
                    <td class="px-4 py-2 border">{{ item.ledv }}</td>
                    <td class="px-4 py-2 border">{{ item.lesv }}</td>
                    <td class="px-4 py-2 border">{{ item.lsv }}</td>
                    <td class="px-4 py-2 border">{{ item.lvef }}</td>
                    <td class="px-4 py-2 border">{{ item.lvmass }}</td>
                    <td class="px-4 py-2 border">{{ item.redv }}</td>
                    <td class="px-4 py-2 border">{{ item.resv }}</td>
                    <td class="px-4 py-2 border">{{ item.rsv }}</td>
                    <td class="px-4 py-2 border">{{ item.rvef }}</td>
                    <td class="px-4 py-2 border">{{ item.mutations }}</td>
                    <td class="text-center border text-xl"><i class="fa-solid fa-pen-to-square text-orange-300"></i></td>
                    <td class="text-center border text-xl"><i class="fa-solid fa-trash text-red-500"></i></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</template>
  
    
    <script>
    import { firebaseFireStore, collection, query, getDocs, doc, getDoc } from "../../firebase/database";
    
    export default {
      name: 'RecordsComponent',
      data() {
        return {
          collectionData: []
        }
      }, methods: {
      closeModal() {
          this.$emit('close-table-modal');
      }
    },
      async created() {
        const q = query(collection(firebaseFireStore, "experimental_data"));
        const querySnapshot = await getDocs(q);
    
        for (const doc of querySnapshot.docs) {
          const data = doc.data();
          const patientRef = data.patient;
          const mutationRef = data.mutations;
          let mutationId = "NULL";
          let patientId = "NULL";
          if (patientRef) {
            const patientDoc = await getDoc(patientRef);
            patientId = patientDoc.id;
          }
          if (mutationRef) {
            const mutationDoc = await getDoc(mutationRef);
            mutationId = mutationDoc.id;
          }
          this.collectionData.push({ ...data, patient: patientId, mutations: mutationId });
        }
    
        console.log(this.collectionData);
      }
    }
    </script>
    
    
    