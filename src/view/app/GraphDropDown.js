import React from "react";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Line Chart", "Bar Chart", "Pie Chart", "Doughnut Graph"];
const GraphDropDown = ({ chartName, setChartName }) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setChartName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log("here=>", chartName);
  };

  return (
    <FormControl
      sx={{ mt: 1, width: 200 }}
      size="small"
      style={{ width: "-webkit-fill-available" }}
    >
      <InputLabel>Select Graph</InputLabel>
      <Select
        multiple
        value={chartName}
        onChange={handleChange}
        input={<OutlinedInput label="Select Graph" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        style={{ background: "white" }}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={chartName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GraphDropDown;
