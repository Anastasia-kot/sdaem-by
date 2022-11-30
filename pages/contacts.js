import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Contacts } from '../src/screens/Contacts/Contacts'
 
export default function Home() {
  return (
    <Contacts />
  )
}
