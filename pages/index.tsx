import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Main } from '../src/screens/Main/Main'
import { Layout } from '../src/layout/Layout';
import { FC } from 'react';


export const Home: FC = () => <Layout> <Main /> </Layout> 
  