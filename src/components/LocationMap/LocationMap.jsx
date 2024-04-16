import { Marker, MapContainer, Popup, TileLayer } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import 'leaflet/dist/leaflet.css';
import { icon } from "leaflet"
import PropTypes from 'prop-types';
const LocationMap = ({coordinates,location}) => {
  const position = coordinates;
  const ICON = icon({
    iconUrl: markerIconPng,

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]

    
  })
        
  return(
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={ICON} position={position}>
      
        <Popup>
          {location}
        </Popup>
     
      </Marker>
    </MapContainer>
  )
};

export default LocationMap;

LocationMap.propTypes = {
  coordinates: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired
};