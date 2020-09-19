import { Box, Button, Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import foods from '../../redOnionData';
import FoodsItem from '../FoodsItem/FoodsItem';
import './FoodMenu.css';

const FoodMenu = () => {
    //const foodMap = foods.filter( food => food.category === 'lunch')
    const [foodsMenu, setFoodsMenu] = useState([]);
    const [activeBtn, setActiveBtn] = useState(false);

    useEffect(()=>{
        const foodsMenu = foods.filter( food => food.category === 'lunch')
        setFoodsMenu(foodsMenu);
    },[]);

    const getFoods = (lunch) => {
        const foodMap = foods.filter( food => food.category === lunch)
        setFoodsMenu(foodMap);
        const newBtn = true;
        setActiveBtn(newBtn);
    }

    console.log(foodsMenu);
    return (
        <Container>
            <Box className="button__box">
                <Button color="primary" className={ activeBtn ? 'activeBtn' : '' } onClick={()=>getFoods('breakfast')} >Breakfast</Button>
                <Button color="primary" className={ activeBtn ? 'activeBtn' : '' } onClick={()=>getFoods('lunch')} >Lunch</Button>
                <Button color="primary" className={ activeBtn ? 'activeBtn' : '' } onClick={()=>getFoods('dinner')} >Dinner</Button>
            </Box>
            <Grid container spacing={3}>
                {
                    foodsMenu.map( foods => <FoodsItem foods={foods} key={foods.img}></FoodsItem>)
                }
            </Grid>
        </Container>
    );
};

export default FoodMenu;