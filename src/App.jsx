 import { useState } from 'react';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import MapView from './components/MapView';
import './App.css';

const cities = {
  rzeszow: {
    lat: 50.0412,
    lng: 21.9991,
  },
  krakow: {
    lat: 50.0647,
    lng: 19.945,
  },
};

const normalizeCityName = (value = '') =>
  value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const getCityPosition = (cityName) => {
  const normalized = normalizeCityName(cityName);
  const city = cities[normalized];

  return city ? [city.lat, city.lng] : [52.0, 19.0];
};

function App() {
  const [markers, setMarkers] = useState([]);

  const handleSearch = (formData) => {
    const startPosition = getCityPosition(formData.startLocation);
    const endPosition = getCityPosition(formData.endLocation);

    setMarkers([
      {
        id: 'start',
        label: formData.startLocation || 'Punkt startowy',
        position: startPosition,
        color: 'green',
      },
      {
        id: 'end',
        label: formData.endLocation || 'Punkt końcowy',
        position: endPosition,
        color: 'blue',
      },
    ]);
  };

  return (
    <div className="travel-app">
      <Header />

      <main className="main-content">
        <SearchPanel onSearch={handleSearch} />
        <MapView markers={markers} />
      </main>
    </div>
  );
}

export default App;