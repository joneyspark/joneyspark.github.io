import React from 'react';
import './FoodsItem.css';
import { Box, Grid, Typography } from '@material-ui/core';
const FoodsItem = (props) => {
    const {name, img, category, desc, price} = props.foods;
    console.log(props.foods);
    return (
            <Grid item xs={12} sm={4}>
                <Box component='div' className="food__card">
                    <img src={process.env.PUBLIC_URL + '/red-onion/images/' + img} width="200" />
                    <Typography variant="h6">
                        {name}
                    </Typography>
                </Box>
            </Grid>
    );
};

export default FoodsItem;