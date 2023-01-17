import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import { fakeCurrencyApi } from './api';
import './index.scss';

const App = () => {
  const [priceCurrency, setPriceCurrency] = useState({});
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  useEffect(() => {
    try {
      const responce = fakeCurrencyApi.fetchCurrency();
      if(responce) {
        setPriceCurrency(responce);
        console.log("api");
      }      
    } catch (e) {
      console.log("Error");
    }
  }, []);

  const onChangeFrom = (val) => {
    const price = val / priceCurrency[fromCurrency].value;
    const result = price * priceCurrency[toCurrency].value;
    setFromPrice(val);
    setToPrice(result);
  }

  const onChangeTo = (val) => {
    const price = val / priceCurrency[toCurrency].value;
    const result = price * priceCurrency[fromCurrency].value;
    setToPrice(val)
    setFromPrice(result);
  }

  const onSetFromCurrency = (cur) => {
    const price = fromPrice / priceCurrency[toCurrency].value;
    const result = price / priceCurrency[cur].value;
    setFromCurrency(cur);
    setToPrice(result)
  }

  const onSetToCurrency = (cur) => {
    const price = toPrice / priceCurrency[cur].value;
    const result = price * priceCurrency[fromCurrency].value;
    setToCurrency(cur);
    setFromPrice(result);
  }

  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={onSetFromCurrency} onChangeValue={onChangeFrom} />
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={onSetToCurrency} onChangeValue={onChangeTo} />
    </div>
  );
}

export default App;
