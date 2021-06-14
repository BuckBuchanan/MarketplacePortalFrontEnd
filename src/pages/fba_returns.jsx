import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'

const RowRenderer = ({ renderBaseRow, ...props }) => {
      let color = props.row.is_replacement==="true" ? "red" : "";
      // const color = this.state.tableState[props.idx].CHECKED==='Y' ? "blue" : "";
      // const color ="yellow";
      props.row.is_replacement = String(props.row.is_replacement);
      return <div style={{color}}>{renderBaseRow(props)}</div>;
};

const FbaReturnsPage = () => {
  return (
    <DashboardLayout>
      <h2>FBA Inventory</h2>
      <DataTable
        url={url}
        api_call={"amazon_fba_api/fba_returns/"}
        rowRenderer={RowRenderer}
      />
    </DashboardLayout>
  )
}

export default FbaReturnsPage;
