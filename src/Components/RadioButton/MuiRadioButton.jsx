import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel error>Years of Experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          onChange={handleChange}
          value={value}
          error
        >
          <FormControlLabel
            control={<Radio color="secondary" size="medium" />}
            label="0-2"
            value="0-2"
            color="secondary"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>{" "}
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
