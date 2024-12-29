import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
  token :  "skBr6RCivebVmL5ypuCu7mVj6qRln340Y9olKbtWzSjO3aNwbaINpW1OzyDr2QMnkHaGEW5VqnfugaJyj1LocP8nBEE5KejlVF9ou8MeabZI55j44cTJeckyuqoFsjOIkEd98nSRkt6pepLfYpO5aDsrgYbOUVwpdxEMBK7gMwouFxv69HBB" ,
})
