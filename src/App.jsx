// App.jsx
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import MainSection from './components/MainSection';

function App() {
  const [coinBalance, setCoinBalance] = useState(0);
  // Coin Added in Navbar 
  const addCoins = (amount) => {
    setCoinBalance(coinBalance + amount);
    toast.success("Credit Added to your Account");
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <Navbar initialBalance={coinBalance} addCoins={addCoins} />
      <Banner onClaimCreditBtn={() => addCoins(500000)} />
      <MainSection />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
