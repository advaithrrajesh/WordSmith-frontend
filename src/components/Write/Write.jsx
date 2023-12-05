import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, makeStyles, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    contentField: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
}));

const Write = () => {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [content, setContent] = useState('');
    const [newKeyword, setNewKeyword] = useState('');
    const [imageUploadUrl, setImageUploadUrl] = useState('');

    const handleImageChange = async (e) => {
        try {
            const selectedFile = e.target.files[0];
            console.log('Selected image:', selectedFile);

            await handleUpload(selectedFile);

        } catch (error) {
            console.error('Error handling image change:', error);
        }
    };


    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            // Check if imageUploadUrl is not an empty string
            const imageUrl = imageUploadUrl !== '' ? imageUploadUrl : null;
            const user_id = localStorage.getItem('user_id')
            // Prepare data to send to the backend
            const postData = {
                title,
                image: imageUrl,
                description,
                keywords,
                content,
                user_id
            };

            // Send data to the backend API endpoint
            await axios.post('http://localhost:8080/api/createblogpost', postData);

            // Handle any additional logic after successfully saving to the database
            console.log('Blog post submitted successfully!');
        } catch (error) {
            console.error('Error submitting blog post:', error);
            // Handle error as needed
        }
    };
    const handleAddKeyword = () => {
        if (newKeyword.trim() !== '' && keywords.length < 5) {
            setKeywords((prevKeywords) => [...prevKeywords, newKeyword.trim()]);
            setNewKeyword('');
        }
    };


    const handleUpload = async (file) => {
        try {
            const formData = new FormData();
            formData.append('key', '8fe77e6b1255326cd57bd02d28ad003f');
            formData.append('image', file);


            const imgbbResponse = await axios.post(
                'https://api.imgbb.com/1/upload',
                formData,
                {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                }
            );

            if (imgbbResponse.data.success) {
                setImageUploadUrl(imgbbResponse.data.data.url)
            } else {
                console.error('Error uploading image to ImgBB:', imgbbResponse.data.error.message);
            }

            setImage(null);
        } catch (error) {
            console.error('Error uploading image to ImgBB:', error);
        }
    };

    return (
        <Container maxWidth="md" className={classes.root}>
            <Typography variant="h4" gutterBottom>
                Write a Blog
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        className={classes.textField}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <input type="file" accept="image/*" onChange={(e) => handleImageChange(e)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        variant="outlined"
                        multiline
                        rows={4}
                        className={classes.textField}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Keywords (max limit : 5)"
                        variant="outlined"
                        className={classes.textField}
                        onChange={(e) => setNewKeyword(e.target.value)}
                        value={newKeyword}
                    />
                    <IconButton color="primary" className={classes.addButton} onClick={handleAddKeyword}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <div>
                        {keywords.map((keyword, index) => (
                            <span key={index} style={{ marginRight: '8px' }}>
                                {keyword}
                            </span>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Content (max 300 words)"
                        variant="outlined"
                        multiline
                        rows={6}
                        className={classes.contentField}
                        onChange={handleContentChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Write;
