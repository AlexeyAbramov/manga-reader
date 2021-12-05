import { FC, useEffect, useState } from 'react';
import { Select } from 'antd';
import axios from 'axios';

import { IData } from './types/IData';

const App: FC = () => {
  const { Option } = Select;

  const [value, setValue] = useState('');
  const [data, setData] = useState<IData[]>([]);

  const handleSearch = (value: string): void => {
    if (value) {
      fetch(value, (data) => setData(data));
    } else {
      setData([]);
    }
  };

  const handleChange = (value: string): void => {
    setValue(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      axios(`localhost:7000/api/mangas/search?term=${value}`).then((res) =>
        console.log(res)
      );
    };

    fetchData();
  }, [value]);

  const options = data.map((d) => <Option key={d.value}>{d.text}</Option>);
  return (
    <Select
      showSearch
      value={value}
      placeholder={props.placeholder}
      style={props.style}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
    >
      {options}
    </Select>
  );
};

export default App;
