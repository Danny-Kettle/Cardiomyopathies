import { getDoc } from '../firebase/database'

export const getRefs = async (data) => {
  const patientRef = data.patient
  const patientSnapshot = await getDoc(patientRef)
  const patientData = patientSnapshot.data()
  data.patient = patientData

  const mutationsRef = data.mutations
  const mutationsSnapshot = await getDoc(mutationsRef)
  const mutationData = mutationsSnapshot.data()
  data.mutations = mutationData

  return data
}
