import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'

const FbaInboundShipments = () => {
  return (
    <DashboardLayout>
      <h2>FBA Inbound Shipments</h2>
      <DataTable url={url} api_call={"amazon_fba_api/fba_inbound_shipments/"} />
    </DashboardLayout>
  )
}

export default FbaInboundShipments;
