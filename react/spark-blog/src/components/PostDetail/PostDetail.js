import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Comment from '../Comment/Comment';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(3),
      color: theme.palette.text.secondary,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(1),
    },
  }));
  
const PostDetail = () => {
    let {postDetail} = useParams();
    const url = `https://jsonplaceholder.typicode.com/posts/${postDetail}`;
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(url)
           .then(res => res.json())
           .then(data => {  
           //setDetails(data => [...data, {"newElm":`${data.id}`}]);
           setDetails(data);
            //console.log(data);
           });
     }, []);

     let postid = details.id;

     let extraData = [details, {"image":`${postid}.webp`}];
     let newImg;
     console.log(extraData);
     const newDetailImg = extraData.map(img => {
        newImg = img.image;
     });



    const getPostId = details.id;
    
    const commentsURL = `https://jsonplaceholder.typicode.com/comments?postId=${getPostId}`;
    
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch(commentsURL)
        .then(res => res.json())
        .then(data => {
            const comments = data.slice(0,5).map(comment => {
                return {...comment, "image": `${comment.id}.jpg`}
            })
            setComments(comments)
            //console.log(comments);
            
        })
    }, [getPostId]);

    const classes = useStyles();


    return (
        <>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                <Paper className={classes.paper}>
                    <img src={process.env.PUBLIC_URL + '/images/blog/' + newImg} />
                    <h1>{details.title}</h1>
                    <Typography gutterBottom variant="h5" component="h2">
                        {details.body}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Total Comments: {comments.length}
                    </Typography>
                    {
                        comments.map(comment => <Comment comment ={comment} key={comment.id}></Comment>)
                    }
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <h1>Right Sidebar</h1>
                </Paper>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default PostDetail;