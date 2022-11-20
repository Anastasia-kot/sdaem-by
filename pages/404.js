import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter();
// хук useEffect
      useEffect(() => {
        setTimeout(() => {
          router.push('/')
        },
          3000
        )
      }, [router])

  // кастомный хук "useRedirest"


      const useRedirest = () => {
        const router = useRouter();

        useEffect(() => {
          setTimeout(() => {
            router.push('/')
          },
            3000
          )
        }, [router])
      }
      useRedirest()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
            <Image src="/error-404.png" alt="Error page png" width={1440} height={1440} />
        
    </div>
  )
}
