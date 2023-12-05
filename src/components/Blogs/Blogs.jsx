import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  gridItem: {
    // Adjust the width to fit at least 3 cards in one line
    flexBasis: '30%',
    [theme.breakpoints.down('md')]: {
      flexBasis: '45%',
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
    },
  },
  title: {
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
  },
  description: {
    marginBottom: theme.spacing(2),
  },
  keywords: {
    fontStyle: 'italic',
    color: theme.palette.text.secondary,
  },
}));

const Blogs = () => {
  const classes = useStyles();
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts when the component mounts
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/fetchblogposts');
        if (response.data.success) {
          setBlogPosts(response.data.blogPosts);
        } else {
          console.error('Error fetching blog posts:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="blogsMainContainer">
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Blog Posts
        </Typography>
        <Grid container spacing={2}>
          {blogPosts.map((blogPost) => (
            <Grid item xs={12} sm={6} md={4} className={classes.gridItem} key={blogPost._id}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" className={classes.title}>
                    {blogPost.title}
                  </Typography>
                  <img src={blogPost.image} alt={blogPost.title} className={classes.image} />
                  <Typography className={classes.description}>{blogPost.description}</Typography>
                  <Typography variant="subtitle2" className={classes.keywords}>
                    Keywords: {blogPost.keywords.join(', ')}
                  </Typography>
                  <Typography>{blogPost.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Blogs;
