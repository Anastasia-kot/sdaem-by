import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Auth } from '../src/screens/Auth/Auth.tsx'
 
export default function Home({ withLayout=false }) {
  return (
    <Auth />
  )
}
