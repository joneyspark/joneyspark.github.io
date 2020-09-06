import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  
  linkBtn: {
    textDecoration: "none",
  },
  linkButton: {
    backgroundColor: "#2196F3",
    color: "#fff",
    '&:hover': {
      background: "#024b86",
   },
  },
  

});

const Post = (props) => {
  
  const{title, userId, id, image, body} = props.post;
  const classes = useStyles();
  return (
        
            <Grid item xs={6} sm={3} className={classes.grid}>
               <Card className={classes.root}>
               <Link to={"/post/"+id} className={classes.linkBtn}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={process.env.PUBLIC_URL + '/images/blog/' +image}
                    title={image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title.substring(0, 20)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h6">
                      {body.substring(0, 170)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
                <CardActions>
                  <Link to={"/post/"+id} className={classes.linkBtn}>
                    <Button variant="contained" className={classes.linkButton} size="small">
                      Learn More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
        </Grid>
  );
}
export default Post;