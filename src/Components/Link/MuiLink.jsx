import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="body2">
        primary
      </Link>
      <Link href="#" color="secondary" underline="hover">
        Second
      </Link>
      <Typography variant="h6">
        <Link href="#" color="success" underline="none" sx={{ textDecoration: "none" }}>
          success
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
