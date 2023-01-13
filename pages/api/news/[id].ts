// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from './data'

export default function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    // res.end(`Post: ${pid}`)

    const { id } = req.query;

     const post = data.news.find(  element =>  element.id === +id );
    console.log(post)
    if (post) {
        res.status(200).json(post)
    } else {
        res.status(404).json({ error: 'resource not exist' })
    }

}
