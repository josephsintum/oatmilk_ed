import { CloudantV1 } from '@ibm-cloud/cloudant'

const service = CloudantV1.newInstance({})
const projectsDB = 'projects'

export function getAllProjects() {
  return service
    .postAllDocs({
      db: projectsDB,
      includeDocs: true,
      limit: 10,
    })
    .then((response) => response.result.rows)
}

export function getProjectById(id: string) {
  return service
    .getDocument({
      db: projectsDB,
      docId: id,
    })
    .then((response) => response.result)
    .catch((err) => {
      console.log({ error: err })
      return null
    })
}
