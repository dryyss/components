import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [value, setValue] = useState(null);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Rating
      onChange={handleChange}
      precision={0.5}
      size="large"
      icon={<FavoriteIcon fontSize="inherit" color="error" />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      //   readOnly
      //   highlightSelectedOnly
    />
  );
};

export default MuiRating;
