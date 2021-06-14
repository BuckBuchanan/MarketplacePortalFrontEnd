import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'

const FbaInventoryAgePage = () => {
  return (
    <DashboardLayout>
      <h2>FBA Inventory Age Statistics</h2>
      <DataTable url={url} api_call={"amazon_fba_api/fba_inventory_age/"} />
    </DashboardLayout>
  )
}

export default FbaInventoryAgePage;
