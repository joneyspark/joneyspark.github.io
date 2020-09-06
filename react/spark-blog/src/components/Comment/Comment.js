import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(3),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));

const Comment = (props) => {
    const {name, body, email, image} = props.comment;
    const classes = useStyles();
    return (
        
        <>
            <Grid item md={12}>
                <Paper className={classes.paper}>
                <Box display="flex" flexWrap="wrap" alignItems="center" bgcolor="grey.300" width="100%">
                    
                    <Box p={1} bgcolor="grey.300" width="20%">
                        <img src={process.env.PUBLIC_URL + '/images/men/' + image} />
                    </Box>
                
                    <Box p={1} bgcolor="grey.300" width="75%">
                    <Typography gutterBottom paragraph={true}>
                        <strong>Name: {name}</strong>
                        <strong>Email: {email}</strong>
                    </Typography>
                    <Typography gutterBottom paragraph={true}>
                       <strong>Comment: </strong> {body}
                    </Typography>
                       
                    </Box>

                </Box>
                </Paper>
            </Grid>
            
        </>
    );
};

export default Comment;