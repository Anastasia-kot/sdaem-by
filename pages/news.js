import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { News } from '../src/screens/News/News.jsx'


export default function Home() {

  return (
    <News/>
  )
}
