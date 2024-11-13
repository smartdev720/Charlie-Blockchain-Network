import React from 'react';
import './App.css';
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import PageContainer from './components/layout/PageContainer';
import Staking from './pages/Staking';
import Footer from './components/layout/Footer';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <Container>
      <NavBar />
      {/* <PageContainer> */}
        {/* <Staking /> */}
      {/* </PageContainer> */}
      <Marketplace />
      <Footer />
    </Container>
  );
}

export default App;
