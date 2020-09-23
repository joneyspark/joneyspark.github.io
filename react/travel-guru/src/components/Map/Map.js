import React from 'react';
import './Map.css';
import { Circle, Map as LeafletMap,  Marker,  TileLayer } from 'react-leaflet';
import leaflet from 'leaflet';
import locationSvg from './location.svg';
const Map = ({ center, zoom }) => {
    const grenIcon = leaflet.icon({
        iconUrl: locationSvg,
        iconSize: [75, 98],
      });
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom} zoomControl={false}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle 
                center={center} 
                fillOpacity={0.4}
                color='white'
                fillColor="red" 
                radius={400}
                >
                <Marker 
                position={center}
                icon={grenIcon}
                >
                </Marker>
                </Circle>
                
            </LeafletMap>
        </div>
    );
};

export default Map;