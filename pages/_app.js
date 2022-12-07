import '../styles/globals.css';
// import { Layout } from '../src/layout/Layout';
import { Provider } from 'react-redux'
import { store } from '../src/store/store'




const MyApp = ({ Component }) => {
  return (
    <Provider store={store}>
      {/* <Layout> */}
        <Component />
      {/* </Layout> */}
    </Provider>
  )
}


MyApp.displayName = 'MyApp';

export default MyApp;
