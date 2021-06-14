import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'

const RowRenderer = ({ renderBaseRow, ...props }) => {
      let color = props.row.isreplacementorder==="true" ? "blue" : "";
      // const color = this.state.tableState[props.idx].CHECKED==='Y' ? "blue" : "";
      // const color ="yellow";
      return <div style={{color}}>{renderBaseRow(props)}</div>;
};

const FbaOrdersPage = () => {

  return (
    <DashboardLayout>
      <h2>FBA Orders</h2>
      <DataTable
        url={url}
        api_call={"amazon_fba_api/fba_orders/"}
        rowRenderer={RowRenderer}
      />
    </DashboardLayout>
  )
}

export default FbaOrdersPage;
