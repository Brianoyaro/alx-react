import { Fragment } from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';
import Login from './Login/login';
import Notifications from './Notifications';


export default function App() {
  return (
    <Fragment>
      <Notifications />
      <Header />
      <Login />
      <Footer />  
    </Fragment>
    
  );
}

