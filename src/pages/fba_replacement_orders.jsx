import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'

const FbaReplacementOrders = () => {
  const queryString = require('query-string');

  return (
    <DashboardLayout>
      <h2>FBA Replacement Order Queue </h2>
      <DataTable url={url} api_call={"amazon_fba_api/fba_replacement_orders/"} />
    </DashboardLayout>
  )
}

export default FbaReplacementOrders;
