import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header2 from '../Header/Header2';
import travelData from '../../TravelData/TravelData';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const PlaceBooking = ({ name }) => {
    let query = useQuery();
    console.log("GetQuery Name >>>",query.get(name));

    let { placeId } = useParams();
    console.log("sendingId>>>", placeId);
    console.log("Query Paramenters>>>", name);

    const getTravelData = travelData.filter( place => place.id === placeId )
    console.log("getAllData >>>", getTravelData);
    
    return (
        <Container>
            <Header2></Header2>
            {name}
            <hr />
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Box component='div' display='flex' justifyContent='center'>
                        <Box component='div' width='45%' p={2}>
                            <img src={process.env.PUBLIC_URL + '/images/rec-26.png'} alt='hotel-1' style={{maxWidth: '100%'}} />
                        </Box>
                        <Box component='div' width='50%' p={2}>
                            <Typography variant='h6'>
                                Light bright airy stylish app & safe peachful stays
                            </Typography>

                            <Typography variant='body1'>
                                4 guests 2 bedrooms 2 beds 2 baths
                                Wif Air conditionning Kitchen
                                Cancellation fexibility available
                                4.9(20)
                                $34/night $167 total

                            </Typography>
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box component='div'>
                        <img src={process.env.PUBLIC_URL + '/images/Sajek.png'} alt=""/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PlaceBooking;