import { News } from '../../src/screens/News/News';
import { Layout } from '../../src/layout/Layout';
import { GetServerSideProps } from 'next';


export const getServerSideProps: GetServerSideProps = async () => {
  
  try {
    const res = await fetch(`http://localhost:3000/api/news`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }

  } catch(err){
      return { props: { data: null } }
  }

}


const Home = ({data}) => {
  
   return (
    <Layout>
      <News data={data}/>
    </Layout>
  )
}

export default Home