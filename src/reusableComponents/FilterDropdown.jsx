import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayedData } from "../redux/globalSlice";

const FilterDropdown = ({ type, data, icon, value, onChange }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(type, newValue);
  };

  return (
    <FormControl sx={{ minWidth: 200 }} size="small">
      <InputLabel
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          textTransform: "capitalize",
        }}
      >
        {icon}
        <span>{type}</span>
      </InputLabel>

      <Select
        label="type"
        value={value}
        onChange={handleChange}
        sx={{ textTransform: "capitalize" }}
      >
        {data.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterDropdown;
