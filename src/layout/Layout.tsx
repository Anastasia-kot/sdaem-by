import Header from './Header/Header';
import Footer from './Footer/Footer';
import React, { ReactNode, FC } from 'react';

type Props =  { children: ReactNode }

export const Layout: FC<Props> = ({ children }) => 
    <>
        <Header />
            {children}
        <Footer />
    </>
