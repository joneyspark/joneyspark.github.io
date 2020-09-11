import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const About = () => {

  const fakeInfoData = {

    "id": 1,
    "name": "spark",
    "country": "BD",
  }
  
  const [fakeinfo, setFakeInfo] = useState({})
  
  useEffect(()=>{
    fakeInfoData.newItem = "new Item Value";
    setFakeInfo(fakeInfoData);
  }, [])
  
  console.log(fakeinfo);


  const classes = useStyles();

  return (
    <Container>
      <h1>About Us coming Soon</h1>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default About;