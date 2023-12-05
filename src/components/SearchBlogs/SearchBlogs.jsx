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

const SearchBlogs = ({ query }) => {

    console.log("The search query ", query)
    const classes = useStyles();
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        // Fetch blog posts based on the search query
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/searchblogs?query=${query}`);
                if (response.data.success) {
                    setBlogPosts(response.data.blogPosts);
                } else {
                    console.error('Error fetching search results:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [query]);

    return (
        <div className="searchBlogsContainer">
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom>
                    Search Results
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

export default SearchBlogs;
