import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState([""]);
  console.log("=>", countries);
  const handleChange = (event) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Countries"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
        size="small"
        color="success"
        helperText=" Select your  country"
        error
      >
        <MenuItem value="FR">France</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="IN">India</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
