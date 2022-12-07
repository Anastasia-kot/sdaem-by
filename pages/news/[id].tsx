import React, { useEffect, FC } from 'react';
import { New } from '../../src/screens/New/New';
import { Layout } from '../../src/layout/Layout';

 

 
export const getServerSideProps =  (context: { params: { id: number; }; }) => {
    const { id } = context.params;
    console.log(id)


    if (!id) {
        return { notFound: true }
    }

    return {
        props: { id: id }
    }
  
   
}

type Props = {
    id: string
}



const ListCard: FC<Props> = ({ id }) => {


    return (
        <Layout>
<New id={id} />
</Layout>)
}

export default ListCard;
