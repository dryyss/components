import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField } from "@mui/material";
import { useState } from "react";

function Label({ componentName, valueType }) {
  const content = (
    <span>
      <strong>{componentName}</strong> for {valueType} editing
    </span>
  );

  return content;
}

export default function CommonlyUsedComponents() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "TimePicker", "DateTimePicker"]}>
        <DemoItem label={<Label componentName="DatePicker" valueType="date" />}>
          <DatePicker
            renderInput={(params) => <TextField {...params} />}
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
          />
        </DemoItem>
        <DemoItem label={<Label componentName="TimePicker" valueType="time" />}>
          <TimePicker />
        </DemoItem>
        <DemoItem label={<Label componentName="DateTimePicker" valueType="date time" />}>
          <DateTimePicker />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
