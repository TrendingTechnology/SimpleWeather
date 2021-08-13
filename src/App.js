import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import Forecast from './components/Forecast';
import CitySearch from './components/CitySearch';
import loadData from './functions/loadData';

const App = () => {
  const [location, setLocation] = useState('');
  const [temp, setTemp] = useState('');
  const [responseCity, setResponseCity] = useState('');
  const [condition, setCondition] = useState('');

  const loadWeather = async () => {
    try {
      const data = await (loadData(location));
      setTemp(data.current.temp_c);
      setResponseCity(data.location.name);
      setCondition(`it's ${(data.current.condition.text).toLowerCase()}`);
    } catch (e) {
      console.error(e);
    }
  };

  const debounceLoadWeather = useCallback(debounce(loadWeather, 200), []);

  useEffect(() => {
    debounceLoadWeather();
  }, [location]);

  const handleEvent = (event) => {
    setLocation(event.target.value)
  }

  return (
    <div className="app">
      <CitySearch value={location} onChange={handleEvent} condition={condition} location={location} responseCity={responseCity} />
      <Forecast temp={temp} location={location} responseCity={responseCity} />
    </div>
  );
}

export default App;