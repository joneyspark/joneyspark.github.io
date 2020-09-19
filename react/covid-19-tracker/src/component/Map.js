import React from 'react';
import { Map as LeafletMap,  TileLayer } from 'react-leaflet';
import './Map.css';
import { showMapCountries } from './Util';

const Map = ({countries, casesType, center, zoom}) => {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom} zoomControl={false}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {showMapCountries(countries, casesType)}
            </LeafletMap>
        </div>
    );
};

export default Map;