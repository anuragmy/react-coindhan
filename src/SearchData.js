import React, { useState } from 'react';
import { Input } from 'antd';

const SearchData = ({ getSearchData }) => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);

    getSearchData(val);
  };
  return (
    <Input
      placeholder="Search..."
      onChange={handleSearch}
      value={search}
      style={{ width: '30%', margin: '30 auto' }}
    />
  );
};

export default SearchData;
