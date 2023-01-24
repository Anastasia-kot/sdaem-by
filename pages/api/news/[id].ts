// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { NewsType } from '../../../src/store/newsSlice';
import { data } from './data'

type ResponseData = {
    post?: NewsType
    error?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

    const { id } = req.query;

    const post = data.news.find(  element =>  element.id === +id );
     
    if (post) {
        res.status(200).json({post})
    } else {
        res.status(404).json({ error: 'resource not exist' })
    }

}
