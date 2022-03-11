import { Table } from 'antd';
import React, { useState } from 'react';

const DataTable = ({ data, columns }) => (
  <Table columns={columns} dataSource={data} />
);

export default DataTable;
