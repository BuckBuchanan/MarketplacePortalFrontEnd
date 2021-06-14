import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'


const RowRenderer = ({ renderBaseRow, ...props }) => {
      let color = props.row.unreconciled > 0 ? "red" : "blue";
      // const color = this.state.tableState[props.idx].CHECKED==='Y' ? "blue" : "";
      // const color ="yellow";
      props.row.is_replacement = String(props.row.is_replacement);
      return <div style={{color}}>{renderBaseRow(props)}</div>;
};

const FbaInventoryAdjustmentsPage = () => {
  return (
    <DashboardLayout>
      <h2>FBA Inventory Ajdustments</h2>
      <DataTable
        url={url}
        api_call={"amazon_fba_api/fba_inventory_adjustments/"}
        rowRenderer={RowRenderer}
      />
    </DashboardLayout>
  )
}

export default FbaInventoryAdjustmentsPage;
