import React, { useEffect } from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";
import TableContainer from "../Components/TableCon";
import { getCamerasData } from "../Api/cameraApi";
import { useDispatch } from "react-redux";
import { setCamerasData } from "../Redux/globalSlice";

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
