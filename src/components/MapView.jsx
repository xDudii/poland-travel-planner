import './MapView.css';
import { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMapEvents, Marker } from 'react-leaflet';

function UserMarker() {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click: (event) => {
      setPosition(event.latlng);
    },
  });

  if (!position) return null;

  return (
    <Marker
      position={position}
      draggable={true}
      eventHandlers={{
        dragend: (event) => {
          const newPos = event.target.getLatLng();
          setPosition(newPos);
        },
      }}
    >
      <Popup>
        <div>
          <h3>Wspolrzedne</h3>
          <p>{position.lat.toFixed(5)}</p>
          <p>{position.lng.toFixed(5)}</p>
        </div>
      </Popup>
    </Marker>
  );
}



function MapView() {
  return (
    <div className="map-view">
      <MapContainer center={[52.0, 19.0]} zoom={6} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker center={[50.0412, 21.9991]} radius={7} color="green">
          <Popup>
            <div>
              <h3>Rzeszów</h3>
              <p>Przykładowy punkt początkowy</p>
            </div>
          </Popup>
        </CircleMarker>

        <CircleMarker center={[50.0647, 19.9450]} radius={7} color="blue">
          <Popup>
            <div>
              <h3>Kraków</h3>
              <p>Przykładowy punkt końcowy</p>
            </div>
          </Popup>
        </CircleMarker>
        <UserMarker></UserMarker>
      </MapContainer>
    </div>
  );
}

export default MapView;