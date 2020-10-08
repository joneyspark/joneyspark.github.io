import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import volunteerFakeData from '../volunteerFakeData';
import { useHistory } from 'react-router-dom';
import './Home.css';

const useStyles = makeStyles((theme) => ({
    banner__heading: {
        textAlign: 'center',
        padding: '50px 0',
        textTransform: 'uppercase',
    },
    search__Box: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
      banner__header__box: {
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          marginTop: theme.spacing(3),
          paddingBottom: '60px',
      },
      card__box: {
        maxWidth: 345,
      },
      media: {
        height: 270,
      },
     
      
}));

const Home = () => {
    const classes = useStyles();

    let history = useHistory();
    const getEvents = (id) => {
        history.push(`/registration/${id}`);
    }

    console.log(volunteerFakeData);
    return (
        <Box component="div" className={classes.home__bg} classes="home_bg">
            <Container>
                <Typography variant="h3" component="h2" className={classes.banner__heading}>
                    I grow by helping pople in need
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={5}>
                    <Box className={classes.banner__header__box}>
                        <Paper component="form" className={classes.search__Box}>
                            <IconButton className={classes.iconButton} aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <InputBase
                                className={classes.input}
                                placeholder="Search Events"
                                inputProps={{ 'aria-label': 'search events' }}
                            />
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>

                <Grid container spacing={3}>
                    {
                        volunteerFakeData.map(data => 
                            <Grid item xs={3} key={data.id}>
                                <Card className={classes.card__box}>
                                    <CardActionArea onClick={() => getEvents(data.id)}>
                                        <CardMedia
                                        className={classes.media}
                                        image={process.env.PUBLIC_URL + 'images/' + data.image}
                                        title={data.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {data.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Home;