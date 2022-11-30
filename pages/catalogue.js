import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { Catalogue } from '../src/screens/Catalogue/Catalogue.jsx'


export default function Home() {

  return (
    <Catalogue />
  )
}
