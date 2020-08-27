import React, {useState, useEffect} from 'react';
import './App.css';
import {Loader} from './components/Loader/PreLoader';
import {Content} from './content/Content';
export const App = () => {
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 2000);
  }, []);
  return <div className="App">{loaded ? <Loader /> : <Content />}</div>;
};

export default App;
