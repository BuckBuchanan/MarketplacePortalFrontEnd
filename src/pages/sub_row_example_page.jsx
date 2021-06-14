import React, { useState } from "react";
import ReactDataGrid from "react-data-grid";

import {DashboardLayout} from '../components/Layout';
import Example from '../components/sub_row_example';
import {url} from '../globals'

const ExamplePage = () => {
  return (
    <DashboardLayout>
      <h2>Example</h2>
      <Example />
    </DashboardLayout>
  )
}

export default ExamplePage;
