import { CloudantV1 } from '@ibm-cloud/cloudant'
import { Project } from '../pages/projects/[projectId]'

const service = CloudantV1.newInstance({})
const projectsDB = 'projects'

// gets all projects
export function getAllProjects() {
  return service
    .postAllDocs({
      db: projectsDB,
      includeDocs: true,
      limit: 10,
    })
    .then((response) => response.result.rows)
}

// fetch project by id
// id: project id
// return project object or null
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

// create project
// param: project object
// returns project id
export function createProject(project: Project) {

  return service
    .postDocument({
      db: projectsDB,
      document: project,
    })
    .then((response) => response.result.id)
    .catch((err) => {
      console.log({ error: err })
    })
}
