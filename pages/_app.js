import '../styles/globals.css';
import { FC, useEffect, useRef } from 'react';
import {Layout} from '../src/layout/Layout';




const MyApp = ({ Component }) => {
  return (<Layout>
            <Component/> 
          </Layout>
  )
}


MyApp.displayName = 'MyApp';

export default MyApp;
