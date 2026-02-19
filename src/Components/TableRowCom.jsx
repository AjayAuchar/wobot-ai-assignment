import React from "react";
import ProgressBar from "../reusableComponents/ProgressBar";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import { Button, Checkbox, TableCell, TableRow } from "@mui/material";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import { getCamerasData, updateCameraStatus } from "../api/cameraApi";
import { setCamerasData } from "../redux/globalSlice";
import { useDispatch } from "react-redux";

const TableRowCom = (props) => {
  const dispatch = useDispatch();
  const { cameraObj } = props;

  const handleStatusToggle = () => {
    updateCameraStatus({
      id: cameraObj.id,
      status:
        cameraObj.status.toLowerCase() === "active" ? "Inactive" : "Active",
    });
    const fetchData = async () => {
      const camerasData = await getCamerasData();
      useDispatch(setCamerasData(camerasData.data));
    };
    fetchData();
  };
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        borderBottom: "1px solid #CED4DA",
      }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          sx={{ marginBottom: 1.5 }}
          // checked={true}
          // onChange={}
        />
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        sx={{ padding: "11px 0px 11px 10px", border: "none" }}
      >
        <div className="flex flex-col justify-center">
          <div className="flex gap-1.5 items-center">
            <div
              className={`w-3 h-3 ${cameraObj.status.toLowerCase() === "active" ? "bg-[#029262]" : "bg-[#FF7E17]"} rounded-full`}
            ></div>
            <span className="text-[#545454] ">{cameraObj.name}</span>
          </div>
          <p className="text-[#7E7E7E] ml-5 text-xs">{cameraObj.model}</p>
        </div>
      </TableCell>
      <TableCell sx={{ display: "flex", gap: 1.5, border: "none" }}>
        <span className="flex items-center gap-1">
          <FilterDramaIcon fontSize="small" sx={{ color: "#A0A0A0" }} />
          <ProgressBar value={90} size={22} color="#FF7E17" />
        </span>

        <span className="flex items-center gap-1">
          <DnsOutlinedIcon fontSize="small" sx={{ color: "#A0A0A0" }} />
          <ProgressBar value={90} size={22} color="#029262" />
        </span>
      </TableCell>
      <TableCell sx={{ border: "none", color: "#545454" }}>
        {cameraObj.location}
      </TableCell>
      <TableCell sx={{ border: "none", color: "#545454" }}>
        {/* recorder name is not provided in the API response, so used a placeholder text */}
        San Francisco Recorder
      </TableCell>
      <TableCell sx={{ border: "none", color: "#545454" }}>
        {/* tasks data is not provided in the API response, so used a placeholder text */}
        3 Tasks
      </TableCell>
      <TableCell sx={{ border: "none", color: "#545454" }}>
        <Button
          variant="contained"
          sx={{
            padding: "2px 10px",
            fontSize: "12px",
            textTransform: "capitalize",
            color:
              cameraObj.status.toLowerCase() === "active"
                ? "#029262"
                : "#545454",
            backgroundColor:
              cameraObj.status.toLowerCase() === "active"
                ? "#0292621A"
                : "#F0F0F0",
          }}
          onClick={handleStatusToggle}
        >
          {cameraObj.status}
        </Button>
      </TableCell>
      <TableCell sx={{ border: "none", color: "#545454" }}>
        <DoNotDisturbIcon fontSize="small" />{" "}
      </TableCell>
    </TableRow>
  );
};

export default TableRowCom;
