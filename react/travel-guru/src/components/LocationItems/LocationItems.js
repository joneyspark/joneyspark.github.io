import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import travelData from '../../TravelData/TravelData';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    main__Box:{
        height: "100vh",
        width: "100%",
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${process.env.PUBLIC_URL + '/images/body-bg.jpg'})`
    },
    root: {
      flexGrow: 1,
    },
    location__Content:{
        color: '#fff',
        paddingLeft: theme.spacing(10),
        paddingTop: theme.spacing(10),
        paddingRight: theme.spacing(3),
    },
    location__Grid: {
        paddingTop: theme.spacing(3)
    },
    card__title: {
        position: 'absolute',
        bottom: 50,
        fontSize: '26px',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 600,
    },
    booking__btn: {
        backgroundColor: '#F9A51A',
        padding: '7px 30px',
        borderRadius: '5px',
        color: '#000',
        fontWeight: 600,
        marginTop: theme.spacing(5),
        '&:hover' :{
            backgroundColor: '#f3ae3b',
        },
    },
    card__default: {
        backgroundColor: 'transparent',
        padding: theme.spacing(1),
        boxShadow: 'none',
        
    },
    card__img: {
        borderRadius: '21px',
        '&:hover': {
            border: '2px solid #f3ae3b',
            borderRadius: '21px',
        }
    }
  }));

  
const LocationItems = () => {

    const getTravelData = travelData.slice(0, 3);

    const classes = useStyles();


    let history = useHistory();
    const getSinglePlace = (id) => {
        history.push(`/booking/${id}`)
    }


    return (
        <Box component="div" className={classes.main__Box}>
            <Header></Header>
            <Grid container>
                <Grid item xs={5}> 
                <Box component='div' className={classes.location__Content}>
                    <Typography variant="h2">
                        Cox's Bazar
                    </Typography>
                    <Typography variant="body1" component="span">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, perspiciatis consequuntur suscipit fuga dolores quo iusto aliquam maiores deserunt sint officia ipsa velit aut commodi amet mollitia dolor atque voluptatum.
                    </Typography>
                    <br />
                    <Button color="primary" className={classes.booking__btn}>Booking</Button>
                </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box component='div' className={classes.location__Grid}>
                        <Grid container >
                            {
                                getTravelData.map( location => 
                                <Grid item xs={4} key={location.id}>
                                <Card className={classes.card__default}>
                                    <CardActionArea onClick={()=>getSinglePlace(location.id)}>
                                        <CardMedia
                                        component="img"
                                        alt={location.location}
                                        height="auto"
                                        image={process.env.PUBLIC_URL + '/images/' + location.img}
                                        title={location.location}
                                        className={classes.card__img}
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" className={classes.card__title} >
                                            {location.location}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                                )
                            }
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LocationItems;