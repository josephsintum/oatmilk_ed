import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import { getProjectById } from '../../../src/db'

const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  let { id } = req.query
  if (id instanceof Array) id = id[0]
  getProjectById(id).then((response) => res.json(response))
})

export default handler
