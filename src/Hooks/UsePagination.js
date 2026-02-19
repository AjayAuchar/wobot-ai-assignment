import { useState, useMemo, useEffect } from "react";

const usePagination = (data = [], setActiveFilter = {}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // slice data for current page
  const paginatedData = useMemo(() => {
    const start = page * rowsPerPage;
    const result = data.slice(start, start + rowsPerPage);
    return result;
  }, [data, page, rowsPerPage]);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
    setActiveFilter({ type: "", value: "" });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  useEffect(() => {
    setPage(0);
  }, [data]);

  return {
    page,
    rowsPerPage,
    paginatedData,
    handleChangePage,
    handleChangeRowsPerPage,
    totalCount: data.length,
  };
};

export default usePagination;
