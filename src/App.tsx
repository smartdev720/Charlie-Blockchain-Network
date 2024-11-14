import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Staking from './pages/Staking';
import Footer from './components/layout/Footer';
import Marketplace from './pages/Marketplace';
import Web3Modal from './components/common/Web3Modal';

function App() {
  const [web3modal, setWeb3modal] = useState<boolean>(false);
  return (
    <Container>
      <NavBar setWeb3Modal={setWeb3modal} />
      <Routes>
        <Route path='/staking' element={<Staking />} />
        <Route path='/marketplace' element={<Marketplace />} />
      </Routes>
      <Footer />
      <Web3Modal web3modal={web3modal} setWeb3Modal={setWeb3modal} />
    </Container>
  );
}

export default App;
