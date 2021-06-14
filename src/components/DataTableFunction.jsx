import React, { useState } from "react";
import ReactDataGrid from "react-data-grid";
import { Toolbar, Data } from "react-data-grid-addons";

const selectors = Data.Selectors;

const handleFilterChange = filter => filters => {
  const newFilters = { ...filters };
  if (filter.filterTerm) {
    newFilters[filter.column.key] = filter;
  } else {
    delete newFilters[filter.column.key];
  }
  return newFilters;
};

function getRows(rows, filters) {
  return selectors.getRows({ rows, filters });
}

function DataTableFunction({ rows, columns, rowRenderer }) {
  const [filters, setFilters] = useState({});
  const filteredRows = getRows(rows, filters);
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => filteredRows[i]}
      rowsCount={filteredRows.length}
      minHeight={500}
      toolbar={<Toolbar enableFilter={true} />}
      onAddFilter={filter => setFilters(handleFilterChange(filter))}
      onClearFilters={() => setFilters({})}
      rowRenderer={rowRenderer}
    />
  );
}

export default DataTableFunction;
