import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Page404 } from '../src/screens/404/404';
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
    <Page404/>
  )
}
