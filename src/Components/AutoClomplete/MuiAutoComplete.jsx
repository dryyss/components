import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

// type Skill = {
//     id:number
//     label:string
// }

const skills = ["HTML", "CSS", "Javascript", "TypeScript", "React"];
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutoComplete = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);
  console.log(skill);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        value={value}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={(event, newValue) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        value={skill}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={(event, newValue) => setSkill(newValue)}
        freeSolo
      />
    </Stack>
  );
};

export default MuiAutoComplete;
