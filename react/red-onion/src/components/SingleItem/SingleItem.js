import { Box, Button, Container, FormControl, Grid, Input, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import foods from '../../redOnionData';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './SingleItem.css';
const SingleItem = () => {
    let { foodId } = useParams();
    const singleItem =  foods.filter( food => food.id === Number(foodId));
    console.log(singleItem);
    return (
        <Container>
                { singleItem.map( food =>
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography variant="h3">
                                {food.name}
                            </Typography>
                            <Typography variant="body1">
                                {food.des}
                            </Typography>
                            <Box component="div" display="flex">
                                <Typography variant="h4">
                                    ${food.price}
                                </Typography>
                                <FormControl>
                                    <Input type="number" min="1" value="1" />
                                </FormControl>
                            </Box>
                            <Button color="primary" className="singleCartBtn">
                                <ShoppingCartOutlinedIcon />
                                Add
                            </Button>
                        </Grid>
                        
                        <Grid item xs={1}></Grid>
                        <Grid item xs={6}>
                            <img src={process.env.PUBLIC_URL + '/red-onion/images/' + food.img} alt="" width='90%' />
                        </Grid>
                    </Grid>
                

                    )
                }
            
        </Container>
    );
};

export default SingleItem;