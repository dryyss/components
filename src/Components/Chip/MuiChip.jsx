import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleDelete = (ChipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== ChipToDelete));
  };
  return (
    <Stack direction="row" spacing={2}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip-outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("Cliked")} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Cliked")}
        onDelete={() => alert("Delete handler called ")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default MuiChip;
