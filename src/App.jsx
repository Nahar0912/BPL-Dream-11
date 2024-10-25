import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import MainSection from './components/MainSection';

function App() {
  const [coinBalance, setCoinBalance] = useState(0);

  const addCoins = (amount) => {
    setCoinBalance(coinBalance + amount);
  };

  return (
    <>
      <Navbar initialBalance={coinBalance} />
      <Banner onClaimCreditBtn={() => addCoins(500000)} />
      <MainSection />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
