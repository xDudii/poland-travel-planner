import React from 'react';
import './MapPlaceholder.css';

function MapPlaceholder() {
  return (
    <div className="map-placeholder">
      <img src="map-icon.svg" alt="Mapa" className="map-placeholder__image" />
      <p className="map-placeholder__text">Mapa zostanie wyświetlona po wyszukaniu trasy.</p>
    </div>
  );
}


export default MapPlaceholder;