import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { New } from '../src/screens/New/New.tsx';
import { Layout } from '../src/layout/Layout';


 


export default function Home({ Component }) {
  return (
    <Layout>
      <New id={0}/>
    </Layout>

  )
}
