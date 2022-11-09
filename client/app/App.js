import React from 'react';
import Navbar from '../features/navbar/Navbar';
import Body from '../features/body/Body';
import Footer from '../features/footer/Footer';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
