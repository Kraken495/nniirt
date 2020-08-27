import React, {useState, useEffect} from 'react';
import './Content.css';
import {Header} from '../components/header/Header';
import {Filds} from '../components/Filds/Filds';
export const Content = () => {
  const [metod, setMetod] = useState('USB');
  return (
    <div className="content">
      <Header metod={metod} setMetod={setMetod} />
      <Filds metod={metod} />
    </div>
  );
};
