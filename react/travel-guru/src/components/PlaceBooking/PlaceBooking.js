import { Box, Container, FormHelperText, Grid, MenuItem, Select, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header2 from '../Header/Header2';
import travelData from '../../TravelData/TravelData';
import Hotels from '../Hotels/Hotels';
import Map from '../Map/Map';
import './PlaceBooking.css';
import { motion } from "framer-motion";
import { transitionsPage, transitionVariants } from '../Transitions/Transitions';
const PlaceBooking = () => {
    let { placeId } = useParams();
    const getTravelData = travelData.filter( place => place.id === Number(placeId) );
    const [hotels, setHotels] = useState([]);
    const [mapCenter, setMapCenter] = useState({
        lat:24.883721,
        lng:91.861839,
    })
    const [zoom , setZoom] = useState(8);

    useEffect(()=>{
        const newTravelData = getTravelData
        setHotels(newTravelData);
        const lat = newTravelData.map( mapLocation => mapLocation.lat);
        const lng = newTravelData.map ( mapLocation => mapLocation.lng);
        
        setMapCenter([lat[0], lng[0]]);
        setZoom(10);
    }, [])

    const handleOnChangeHotel = (e) => {
        const getMapValue = e.target.value;
        setMapCenter([getMapValue[0], getMapValue[1]]);
        setZoom(12);
    }
    let pageVariants;
    let pageTransitions;
    transitionVariants(pageVariants);
    transitionsPage(pageTransitions);
    
    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={transitionVariants(pageVariants)}
            transition={transitionsPage(pageTransitions)}
        >
            <Container>
                <Header2></Header2>

                <hr />
                <Grid container spacing={3}>
                    
                    <Grid item xs={6}>
                        <Box component='div' className="hotel__wrap_box">
                            {
                                hotels.map(hotel => <Hotels hotel={hotel} key={hotel.id}></Hotels>)
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box component='div'>
                                <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                onChange={handleOnChangeHotel}
                                className='hotel__select__box'
                                >
                                
                                    { 
                                        hotels.map(gethotels => gethotels.hotels.map( gethotel => 
                                        <MenuItem value={[gethotel.lat, gethotel.lng]}>{gethotel.name}</MenuItem>))
                                    }
                                </Select>
                                <FormHelperText><em>Select Hotel Location in Map</em></FormHelperText>
                            <Map center={mapCenter} zoom={zoom}></Map>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </motion.div>
    );
};

export default PlaceBooking;