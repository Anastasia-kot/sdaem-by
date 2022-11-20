import Header from './Header/Header';
import Footer from './Footer/Footer';
import { ReactNode, FC } from 'react';


type PropsType ={
    children: ReactNode
}
export const Layout: FC<PropsType> =  ({children}) => (
    <div>
        <Header />
            {children}
        <Footer />
    </div>
)

 