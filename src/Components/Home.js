import APIRequest from "../utils/axios";
import React, { useState, useEffect } from "react";
import { Container, Button, Typography, Badge } from "@mui/material";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
const Home = () => {
  const [joke, setJoke] = useState();
  const [rating, setRating] = useState({ likes: 0, dislikes: 0 });
  const [click, setClick] = useState(false);

  const like = () => {
    setRating((prev) => ({
      likes: prev.likes + 1,
      dislikes: prev.dislikes,
    }));
  };

  const disLike = () => {
    setRating((prev) => ({
      likes: prev.likes,
      dislikes: prev.dislikes + 1,
    }));
  };

  const newJoke = () => {
    setClick(!click);
  };

  useEffect(() => {
    APIRequest()
      .then((response) => setJoke(response.data.value))
      .catch((e) => console.log(e));
  }, [click]);

  return (
    <Container maxWidth="sm">
      <Typography sx={{ mb: 5 }} variant="h4">
        {joke}
      </Typography>

      <Button
        onClick={newJoke}
        fullWidth
        sx={{ my: 5 }}
        color="primary"
        variant="contained"
      >
        New Joke
      </Button>

      <Badge sx={{ mx: 5 }} badgeContent={rating.likes} color="primary">
        <Button
          onClick={like}
          color="success"
          variant="contained"
          startIcon={<ThumbUpAltIcon />}
        >
          Like
        </Button>
      </Badge>

      <Badge sx={{ mx: 5 }} badgeContent={rating.dislikes} color="primary">
        <Button
          onClick={disLike}
          sx={{ mx: 0 }}
          color="error"
          variant="contained"
          endIcon={<ThumbDownAltIcon />}
        >
          Dislike
        </Button>
      </Badge>
    </Container>
  );
};

export default Home;
