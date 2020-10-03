import React from 'react';
import {Link} from "react-router-dom";
import './FoodsItem.css';
import { Box, Grid, Typography } from '@material-ui/core';
const FoodsItem = (props) => {
    const {id, name, img, category, desc, price} = props.foods;
    console.log(props.foods);
    return (
            <Grid item xs={12} sm={4}>
                <Link to={`/menuitem/${id}`}>
                    <Box component='div' className="food__card" >
                        <img src={process.env.PUBLIC_URL + '/red-onion/images/' + img} width="200" />
                        <Typography variant="h6">
                            {name}
                        </Typography>
                    </Box>
                </Link>
            </Grid>
    );
};

export default FoodsItem;