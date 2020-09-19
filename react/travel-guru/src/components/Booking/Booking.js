import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import travelData from '../../TravelData/TravelData';

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
    card__booking:{
        padding: theme.spacing(2)
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
        '&:hover': {
            border: '2px solid #f3ae3b',
            borderRadius: '21px',
        }
    },
    form__booking:{
        '& > *': {
            padding: theme.spacing(1),
            width: '97%',
          },
    },
    booking__date_box:{
        width: '50%',
    },
    
    booking__to:{
        textAlign: 'right'
    },

    

  }));

  
const Booking = () => {
    const classes = useStyles();
    let { locationId } = useParams();
    const getTravelData = travelData.filter( location => location.id === Number(locationId) );
    
    let getId =  getTravelData.map( location => location.id);
    
    console.log("Location ID", getId);
    const getOrigin =  getTravelData.map( location => location.origin);
    const getLocation =  getTravelData.map( location => location.location);
    const getDescription =  getTravelData.map( location => location.desc);

    let history = useHistory();
    const bookingHandle = (getOrigin) => {
        history.push(`/placebooking?=${getOrigin}`);
        console.log(getOrigin);
    }
    return (
        <Box component="div" className={classes.main__Box}>
            <Header></Header>
            <Grid container>
                
                <Grid item xs={6}> 
                <Box component='div' className={classes.location__Content}>
                    <Typography variant="h2">
                        {getLocation}
                    </Typography>
                    <Typography variant="body1">
                        {getDescription}
                    </Typography>
                </Box>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={4}>
                    <Box component='div' className={classes.location__Grid}>
                        <Card className={classes.card__booking}>
                            <CardContent>
                            <form className={classes.form__booking} noValidate autoComplete="off">
                                <TextField id="location_origin" value={getOrigin} label="Origin" variant="filled" />
                                <TextField id="location_destination" value={getLocation} label="Destination" variant="filled" />
                                <Box component='div' display='flex' justifyContent="center">
                                    <Box className={classes.booking__date_box}>
                                    <TextField
                                        id="date"
                                        label="From"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        className={classes.booking__from}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    </Box>

                                    <Box className={classes.booking__date_box}>
                                    <TextField
                                        id="date"
                                        label="To"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        className={classes.booking__to}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    </Box>
                                </Box>
                                <Button variant="contained" color="primary" onClick={()=>bookingHandle(getOrigin)} className={classes.booking__btn}>
                                    Start Booking
                                </Button>

                            </form>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Booking;