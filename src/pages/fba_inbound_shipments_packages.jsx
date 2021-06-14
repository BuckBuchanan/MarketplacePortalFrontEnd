import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'

const FbaInboundShipmentsPackages = () => {
  return (
    <DashboardLayout>
      <h2>FBA Inbound Shipments Packages</h2>
      <DataTable url={url} api_call={"amazon_fba_api/fba_inbound_shipments_packages/"} />
    </DashboardLayout>
  )
}

export default FbaInboundShipmentsPackages;
