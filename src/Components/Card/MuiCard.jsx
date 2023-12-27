import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex voluptatibus nulla,
            excepturi nesciunt impedit hic laboriosam expedita, labore vero nemo incidunt culpa
            porro illum inventore quod eius esse! Dolor, soluta? React
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
