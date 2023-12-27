import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} color="secondary" onChange={handleChange} />}
      />
    </Box>
  );
};

export default MuiSwitch;
