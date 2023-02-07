import { News } from '../../src/pages/News/ui/News';
import { Layout } from '../../src/layout/Layout';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { NewsState } from '../../types/news_data';


export const getServerSideProps: GetServerSideProps = async () => {
  
  try {
    const res = await fetch(`http://localhost:3000/api/news`)
    const data = await res.json()
    return { props: { data } }

  } catch(err){
      return { props: { data: null } }
  }

}

type Props = {
  data: NewsState
}

const Home: FC<Props> = ({data}) => <Layout>  <News data={data}/>  </Layout>
export default Home