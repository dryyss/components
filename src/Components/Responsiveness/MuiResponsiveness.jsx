import { Box } from "@mui/material";
import React from "react";

const MuiResponsiveness = () => {
  return (
    <Box
      bgcolor="primary.main"
      sx={{ height: "500px", width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 } }}
    ></Box>
  );
};

export default MuiResponsiveness;
