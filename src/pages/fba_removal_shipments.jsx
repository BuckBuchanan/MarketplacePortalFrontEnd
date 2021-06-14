import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'

const FbaRemovalShipments = () => {
  return (
    <DashboardLayout>
      <h2>FBA Removal Shipments</h2>
      <DataTable url={url} api_call={"amazon_fba_api/fba_removal_shipments/"} />
    </DashboardLayout>
  )
}

export default FbaRemovalShipments;
