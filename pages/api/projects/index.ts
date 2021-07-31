import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import { getAllProjects } from '../../../src/db'

const handler = nc<NextApiRequest, NextApiResponse>()
  .get(async (_req, res) => {
    getAllProjects().then((response) => res.json({ results: response }))
  })
  .post((_req, res) => {
    // todo: create project

    res.json({ hello: 'world' })
  })

export default handler
