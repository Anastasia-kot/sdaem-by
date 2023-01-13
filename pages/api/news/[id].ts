// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from './data'

export default function handler(req, res) {

    const { id } = req.query;

    const post = data.news.find(  element =>  element.id === +id );
     
    if (post) {
        res.status(200).json(post)
    } else {
        res.status(404).json({ error: 'resource not exist' })
    }

}
