import './MapView.css';
import { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMapEvents } from 'react-leaflet';

function UserMarker() {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click: (event) => {
      setPosition(event.latlng);
    },
  });

  if (!position) return null;

  return (
    <CircleMarker center={position} radius={8} color="red">
      <Popup>
        <div>
          <h3>Współrzędne</h3>
          <p>{position.lat.toFixed(5)}</p>
          <p>{position.lng.toFixed(5)}</p>
        </div>
      </Popup>
    </CircleMarker>
  );
}

function MapView({ markers = [] }) {
  return (
    <div className="map-view">
      <MapContainer center={[52.0, 19.0]} zoom={6} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker) => (
          <CircleMarker
            key={marker.id}
            center={marker.position}
            radius={7}
            color={marker.color}
          >
            <Popup>
              <div>
                <h3>{marker.label}</h3>
                <p>{marker.position[0].toFixed(4)}, {marker.position[1].toFixed(4)}</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}

        <UserMarker />
      </MapContainer>
    </div>
  );
}

export default MapView;