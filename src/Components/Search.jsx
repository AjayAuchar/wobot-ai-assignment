import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "../hooks/UseDebounce";
import { setDisplayedData } from "../redux/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import usePagination from "../hooks/UsePagination";

const Search = () => {
  const dispatch = useDispatch();
  const camerasData = useSelector((state) => state.globalData.camerasData);
  const { paginatedData } = usePagination(camerasData?.cameras || []);

  const searchApi = (value) => {
    console.log("Searching:", value);
    if (value.trim() !== "") {
      const filteredData = camerasData.cameras.filter((camera) =>
        camera?.name?.toLowerCase().includes(value.toLowerCase()),
      );
      dispatch(setDisplayedData(filteredData));
    } else {
      dispatch(setDisplayedData(paginatedData));
    }
  };

  const debouncedSearch = useDebounce(searchApi, 1000);

  return (
    <div className="w-full px-10 h-19 flex justify-between items-center">
      <div className="flex flex-col">
        <p className="text-lg font-semibold mb-1">Cameras</p>
        <span className="text-sm text-[#545454]">
          Manage your cameras here.
        </span>
      </div>
      <div className="bg-[#F3F3F4] flex justify-between w-70 h-10 border border-[#F0F0F0] rounded-md px-3 py-2">
        <input
          type="text"
          onChange={(e) => debouncedSearch(e.target.value)}
          placeholder="search by name..."
          className="outline-none"
        />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
