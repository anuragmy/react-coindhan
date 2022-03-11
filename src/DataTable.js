import React from 'react';
import { Table } from 'antd';

const DataTable = ({ data, columns }) => (
  <Table columns={columns} dataSource={data} />
);

export default DataTable;
