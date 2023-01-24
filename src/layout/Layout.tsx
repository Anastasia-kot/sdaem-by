import Header from './Header/Header';
import Footer from './Footer/Footer';
import React, { ReactNode, FC } from 'react';


export const Layout: FC<{}> = React.memo(({ children }: { children: ReactNode }) => (
    <div>
        <Header />
            {children}
        <Footer />
    </div>
))

Layout.displayName = 'Layout';


 