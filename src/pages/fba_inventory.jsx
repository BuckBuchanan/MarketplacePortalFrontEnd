import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'

const FbaInventoryPage = () => {
  return (
    <DashboardLayout>
      <h2>FBA Inventory</h2>
      <DataTable url={url} api_call={"amazon_fba_api/fba_inventory/"} />
    </DashboardLayout>
  )
}

export default FbaInventoryPage;
