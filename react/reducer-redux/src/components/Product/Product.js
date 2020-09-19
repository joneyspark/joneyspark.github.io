import React from 'react';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    box:{
        width: "100%",
        backgroundColor: "#ffd08b42"
    },
    content:{
        textAlign: "left",
        width: "70%",
    },
    pd_img:{
        width: "30%",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));


const Product = (props) => {
    const {addToCart, product} = props;
    const classes = useStyles();
    return (
        <div>
            <Box display="flex" className={classes.box} m={3}>
                <Box p={1} flexGrow={1} className={classes.pd_img}>
                    <img src={product.img} alt="" />
                </Box>

                <Box p={1} flexGrow={1} className={classes.content}>
                    <h4>{product.name}</h4>
                    <p>Price: {product.price}</p>
                    <p>Stock left by: {product.stock}</p>
                    <Button 
                    variant="contained"
                    color="primary"
                    onClick={()=>addToCart(product.key, product.name)}
                    >
                        Add to Cart
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Product;