import { Tooltip, IconButton, Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
const MuiTooltip = () => {
  return (
    <Tooltip title="Delete" placement="right" arrow leaveDelay={200} enterDelay={200}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default MuiTooltip;
