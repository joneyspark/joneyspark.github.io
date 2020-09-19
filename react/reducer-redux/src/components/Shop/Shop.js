import React from 'react';
import { Container,Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addToCart } from './../Redux/Actions/cartActions';
import { connect } from 'react-redux'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    reviewOrder:{
        backgroundColor: "#ffd08b42",
        padding: theme.spacing(2),
    }
}));

const Shop = (props) => {
console.log(props);
const classes = useStyles();

const {products, addToCart} = props;

return (
    
    <Container className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={8}>
            {
            products.slice(0, 20).map(product => (
            <Product 
                product={product}
                key={product.key}
                addToCart={addToCart}
            >

            </Product>
            ))
        }
            </Grid>
            <Grid item xs={4}>
                <Box p={1} flexGrow={1} className={classes.reviewOrder}>
                    <h1>Order Review</h1>
                    <Cart></Cart>
                </Box>
            </Grid>
        </Grid>
    </Container>
);
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

//const connectToStore = connect(mapStateToProps, mapDispatchToProps);

//connect(mapStateToProps,mapDispatchToProps)(Shop)

export default connect(mapStateToProps,mapDispatchToProps)(Shop);