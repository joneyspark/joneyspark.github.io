import { Box, Typography } from '@material-ui/core';
import React from 'react';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import './hotels.css';
const Hotels = (props) => {
    const getHotels = props.hotel.hotels;
    //console.log(getHotels);
    return (
        <>
            {
                getHotels.map(gethotel => 
                    <Box component='div' display='flex' justifyContent='center' key={gethotel.name}>
                        <Box component='div' width='45%' p={2}>
                            <img src={process.env.PUBLIC_URL + '/images/' + gethotel.img} alt='hotel-1' style={{maxWidth: '100%'}} />
                        </Box>
                        <Box component='div' width='50%' p={2}>
                            <Typography variant='h6'>
                                {gethotel.name}
                            </Typography>

                            <Typography variant='body1' className='hote__body__content'>
                                <Typography variant='inherit' className="hotel__badge">
                                    {gethotel.guests} guests &nbsp;
                                </Typography>
                                <Typography variant='inherit' className="hotel__badge">
                                    {gethotel.bedrooms} bedrooms &nbsp;
                                </Typography>
                                <Typography variant='inherit' className="hotel__badge">
                                    {gethotel.bed} bed &nbsp;
                                </Typography>
                                <Typography variant='inherit' className="hotel__badge">
                                    {gethotel.baths} baths
                                </Typography>
                                <Typography variant='inherit' className="hotel__details">
                                    {gethotel.details}
                                </Typography>

                                <Box component='span' display='flex' justifyContent='center' alignItems='center'>
                                    <Box component='span' width='50%'>
                                    <Typography variant='inherit' className="hotel__rating_box">
                                        <StarHalfIcon className="hotel__rating_star" /> 
                                        <Typography variant='overline' className='rating__number'>
                                            {gethotel.rating}(20)
                                        </Typography>
                                    </Typography>
                                    </Box>
                                    <Box component='span' width='50%'>
                                    <Typography variant='inherit' className="hotel__room_costing">
                                        ${gethotel.pernight}/night $167 total
                                    </Typography>
                                    </Box>
                                </Box>
                            </Typography>
                        </Box>
                    </Box>
                )
            }
        
        </>
    );
};

export default Hotels;