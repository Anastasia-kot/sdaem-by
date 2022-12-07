import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Main } from '../src/screens/Main/Main.jsx'
import { Layout } from '../src/layout/Layout';



export default function Home({Component}) {
  return (
     <Layout> 
        <Main />
      </Layout> 

  )
}
