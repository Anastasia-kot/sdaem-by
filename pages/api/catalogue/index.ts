// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { CatalogueType } from '../../../src/store/catalogueSlice';
import {data} from './data'




type ResponseData = {
  items: CatalogueType[]
  totalCount: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.status(200).json(data)
}
