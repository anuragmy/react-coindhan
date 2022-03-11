import React, { useState } from 'react';
import { Tabs } from 'antd';
import { MARKET_DATA, FEES, columnsFees, columnsMarket } from './constants';
import DataTable from './DataTable';
import SearchData from './SearchData';
const { TabPane } = Tabs;

const DataTabs = () => {
  const [newData, setNewData] = useState([]);
  const [backup, setBackup] = useState([]);
  React.useEffect(() => {
    const data = MARKET_DATA.map((item) => {
      return {
        ...item,
        maker: '0.125%',
        taker: '0.125%',
      };
    });
    setNewData(data);
    setBackup(data);
  }, []);

  const getSearchData = (s) => {
    if (!s) {
      setNewData(backup);
      return;
    }
    const nd = newData.filter((item) =>
      item.name.toLowerCase().includes(s.toLowerCase())
    );
    setNewData(nd);
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Trading fees" key="1">
        <SearchData getSearchData={getSearchData} />
        <DataTable data={newData} columns={columnsMarket} />
      </TabPane>
      <TabPane tab="Deposit and withdrawl fees" key="2">
        <DataTable data={FEES} columns={columnsFees} />
      </TabPane>
    </Tabs>
  );
};

export default DataTabs;
