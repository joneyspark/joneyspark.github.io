import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { useEffect } from 'react';
import Post from '../Post/Post';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(5),
    },
  }));
  


const Home = () => {
    const classes = useStyles();
    const url = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = useState([]);
    

    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const posts = data.slice(0, 20).map(post => {
                return {...post, "image": `${post.id}.webp`}
            })
            setPosts(posts)
            console.log(posts);
        })
    }, []);

    return (
        <>
        <Container>
            
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {
                        posts.map(post => <Post post = {post} key={post.id} ></Post>)
                    }
                </Grid>
            </div>
            <Typography variant="h3" color="textSecondary" component="h3">
                Posts Show: {posts.length}
            </Typography>
        </Container>
        </>
    );
};

export default Home;