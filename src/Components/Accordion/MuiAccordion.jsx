import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreicon from "@mui/icons-material/ExpandMore";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreicon />}
        >
          <Typography>Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a vero possimus ipsa
            itaque rerum, illo, hic maiores, repellendus ab necessitatibus libero! Quis, maiores
            corporis nam repellat nostrum iste incidunt!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreicon />}
        >
          <Typography>Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a vero possimus ipsa
            itaque rerum, illo, hic maiores, repellendus ab necessitatibus libero! Quis, maiores
            corporis nam repellat nostrum iste incidunt!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreicon />}
        >
          <Typography>Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a vero possimus ipsa
            itaque rerum, illo, hic maiores, repellendus ab necessitatibus libero! Quis, maiores
            corporis nam repellat nostrum iste incidunt!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
