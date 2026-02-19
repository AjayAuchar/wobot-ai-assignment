import React, { useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import TableContainer from "../components/TableCon";
import { getCamerasData } from "../api/cameraApi";
import { useDispatch } from "react-redux";
import { setCamerasData } from "../redux/globalSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // API call to fetch cameras data for the table
    const fetchData = async () => {
      const camerasData = await getCamerasData();
      dispatch(setCamerasData(camerasData.data));
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen bg-[#F9F9F9]">
      <Header />
      <Search />
      <TableContainer />
    </div>
  );
};

export default Dashboard;
