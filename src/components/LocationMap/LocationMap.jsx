import { Marker, MapContainer, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
const LocationMap = ({coordinates,location}) => {
  //  console.log(coordinates);
  const position = coordinates;
  
        
  return(
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      
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