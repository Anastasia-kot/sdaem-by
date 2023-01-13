import { News } from '../../src/screens/News/News';
import { Layout } from '../../src/layout/Layout';


export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/news`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


const Home = ({data}) => {
  
   return (
    <Layout>
      <News data={data}/>
    </Layout>
  )
}

export default Home