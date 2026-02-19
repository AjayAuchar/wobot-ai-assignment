import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Checkbox, TableFooter, TablePagination } from "@mui/material";
import FilterDropdown from "../ReusableComponents/FilterDropdown";
import TableRowCom from "./TableRowCom";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import { useDispatch, useSelector } from "react-redux";
import usePagination from "../Hooks/UsePagination";
import { setDisplayedData } from "../Redux/globalSlice";

const TableCon = () => {
  const dispatch = useDispatch();
  const camerasData = useSelector((state) => state.globalData.camerasData);
  const displayedData = useSelector((state) => state.globalData.displayedData);

  const [activeFilter, setActiveFilter] = useState({
    type: "",
    value: "",
  });

  const handleFilterChange = (type, value) => {
    setActiveFilter({ type, value });

    let filtered = camerasData?.cameras || [];

    if (type === "location") {
      filtered = filtered.filter((camera) =>
        camera?.location?.toLowerCase().includes(value.toLowerCase()),
      );
    }

    if (type === "status") {
      filtered = filtered.filter(
        (camera) => camera?.status?.toLowerCase() === value.toLowerCase(),
      );
    }

    dispatch(setDisplayedData(filtered));
  };

  const {
    page,
    rowsPerPage,
    paginatedData,
    handleChangePage,
    handleChangeRowsPerPage,
    totalCount,
  } = usePagination(camerasData?.cameras || [], setActiveFilter);

  const columns = [
    { id: 1, headerName: "Name", width: 70 },
    { id: 2, headerName: "Health", width: 130 },
    { id: 3, headerName: "Location", width: 130 },
    { id: 4, headerName: "Recorder", width: 130 },
    { id: 5, headerName: "Tasks", width: 130 },
    { id: 6, headerName: "Status", width: 130 },
    { id: 7, headerName: "Actions", width: 130 },
  ];

  useEffect(() => {
    if (paginatedData.length > 0) dispatch(setDisplayedData(paginatedData));
  }, [paginatedData]);

  return (
    <Box className="w-full px-10">
      <TableContainer component={Paper}>
        <TableRow
          sx={{
            width: "100%",
            display: "flex",
            gap: 1,
            borderBottom: "1px solid #CED4DA",
            padding: "10px 14px",
            position: "sticky",
            top: 0,
            zIndex: 100,
            backgroundColor: "#FFFFFF",
          }}
        >
          <FilterDropdown
            type="location"
            data={["building A", "building B"]}
            value={activeFilter.value}
            onChange={handleFilterChange}
            icon={<PlaceOutlinedIcon fontSize="small" />}
          />

          <FilterDropdown
            type="status"
            data={["active", "inactive"]}
            value={activeFilter.value}
            onChange={handleFilterChange}
            icon={<RssFeedOutlinedIcon fontSize="small" />}
          />
        </TableRow>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  // checked={true}
                  // onChange={}
                />
              </TableCell>
              {columns.map((col) => (
                <TableCell
                  sx={{
                    color: "#7E7E7E",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    fontWeight: "600",
                    padding: "12px 0px 12px 10px",
                  }}
                  key={col.id}
                >
                  {col.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ maxHeight: "400px", overflowY: "scroll" }}>
            {displayedData.length > 0 ? (
              <>
                {displayedData?.map((cameraObj) => (
                  <TableRowCom key={cameraObj.id} cameraObj={cameraObj} />
                ))}
              </>
            ) : (
              <span className="w-screen py-8 text-center flex items-center justify-center">
                No data found
              </span>
            )}
          </TableBody>
        </Table>
        <TableFooter
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            position: "sticky",
            bottom: 0,
            zIndex: 100,
            backgroundColor: "#FFFFFF",
          }}
        >
          <TablePagination
            sx={{ color: "#545454" }}
            rowsPerPageOptions={[5, 10, 15, 20]}
            count={totalCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            component="div"
          />
        </TableFooter>
      </TableContainer>
    </Box>
  );
};

export default TableCon;
