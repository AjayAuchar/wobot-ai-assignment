import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const ProgressBar = ({ value, size = 20, color }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        thickness={5}
        sx={{
          color: color || "success",
        }}
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography component="span" sx={{ fontWeight: 600, fontSize: "10px" }}>
          {"A"}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
