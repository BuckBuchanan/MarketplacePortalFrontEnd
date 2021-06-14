import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'

const FbaOrdersPage = () => {
  return (
    <DashboardLayout>
      <h2>FBA Outbound Shipments</h2>
      <DataTable url={url} api_call={"amazon_fba_api/fba_fulfilled_shipments/"} />
    </DashboardLayout>
  )
}

export default FbaOrdersPage;
