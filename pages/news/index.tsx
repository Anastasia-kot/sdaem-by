import { News } from '../../src/screens/News/News';
import { Layout } from '../../src/layout/Layout';
import { GetServerSideProps } from 'next';
import { NewsType } from '../../src/store/newsSlice';
import { FC } from 'react';


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

type Props = {
  data: {
    news: NewsType[],
    totalCount: number
  }
}


const Home: FC<Props> = ({data}) => {
  
   return (
    <Layout>
      <News data={data}/>
    </Layout>
  )
}

export default Home