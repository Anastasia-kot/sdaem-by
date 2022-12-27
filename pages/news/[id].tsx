import React, {  FC } from 'react';
import { New } from '../../src/screens/New/New';
import { Layout } from '../../src/layout/Layout';
import { useRouter } from 'next/router';





const NewCard: FC = () => {

    const router = useRouter();
    const id = router.query.id;

    return (
        <Layout>
            <New id={id} />
        </Layout>)
}

export default NewCard;
