import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'

const FbaInventoryEventsPage = () => {
  return (
    <DashboardLayout>
      <h2>FBA Inventory</h2>
      <DataTable url={url} api_call={"amazon_fba_api/fba_inventory_events/"} />
    </DashboardLayout>
  )
}

export default FbaInventoryEventsPage;
