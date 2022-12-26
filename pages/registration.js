import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Registration } from '../src/screens/Auth/Registration.tsx'
 
export default function Home({ withLayout=false }) {
  return (
    <Registration />
  )
}
