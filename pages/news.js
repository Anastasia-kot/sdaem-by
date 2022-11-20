import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    },
      3000
    )
  }, [router])

  return (
    <div className={styles.container}>
    
    </div>
  )
}
