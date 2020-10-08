import { Container, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { API_URL } from '../../App';
import { toast } from 'react-toastify';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 270,
    },
  });

const UserPanel = () => {
    const classes = useStyles();
    const [loggedInUser] = useContext(UserContext);
    const [userEvent, setUserEvent] = useState([]);
    
    useEffect(() => {
        fetch(API_URL + "/userPanel?email="+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type':'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
        })
        .then(res => res.json())
        .then(result => setUserEvent(result))
    }, []);

    const deleteEvent = (e, id) => {
        e.persist();
        fetch(API_URL + `/deleteEvent/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result =>{
                if(result === true){
                    e.target.parentNode.parentNode.parentNode.style.display = 'none';
                    toast.success("Item Delete Successfully", {
                        position: toast.POSITION.TOP_LEFT
                    });
                }
        })
    }

    return (
        <Container>
            <Typography variant="h4" style={{textAlign: 'center', marginTop:'40px', marginBottom: '40px'}}>
                Welcome to {loggedInUser.name}
            </Typography>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8} container spacing={3}>
                {
                    userEvent.map(events => 
                    <Grid item xs={4} key={events._id}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={process.env.PUBLIC_URL+'/images/'+ events.image }
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {events.event}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {events.des}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button variant="contained" color="secondary" onClick={(e) => deleteEvent(e, events._id)}>
                                Cancel
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    
                    )
                
                    

                }
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </Container>
    );
};

export default UserPanel;