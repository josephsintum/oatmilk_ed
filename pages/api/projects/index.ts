import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import { createProject, getAllProjects } from '../../../src/db'

const handler = nc<NextApiRequest, NextApiResponse>()
  // return: all projects
  .get(async (_req, res) => {
    getAllProjects().then((response) => res.json({ results: response }))
  })
  // req.body: project object
  // return: {results: projectId }
  .post((req, res) => {
    createProject(req.body).then((response) => res.json({ results: response }))
  })

export default handler
