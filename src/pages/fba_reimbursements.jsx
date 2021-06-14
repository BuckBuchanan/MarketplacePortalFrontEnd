import React from 'react';

import {DashboardLayout} from '../components/Layout';
import DataTable from '../components/DataTable'
import {url} from '../globals'

const FbaReimbursements = () => {
  const queryString = require('query-string');

  return (
    <DashboardLayout>
      <h2>FBA Reimbursements</h2>
      <DataTable url={url} api_call={"amazon_fba_api/fba_reimbursements/"} />
    </DashboardLayout>
  )
}

export default FbaReimbursements;
