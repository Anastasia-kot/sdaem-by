// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from './data'

export default function handler(req, res) {

    const { id } = req.query;

    const item = data.items.find(  element =>  element.id === +id );
     
    if (item) {
        res.status(200).json(item)
    } else {
        res.status(404).json({ error: 'resource not exist' })
    }

}
