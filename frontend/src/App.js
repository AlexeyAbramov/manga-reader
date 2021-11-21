import { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: blueviolet;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px;

  ${(props) =>
    props.primary &&
    css`
      background-color: crimson;
      color: black;
    `}
`;

const App = () => {
  const [name, setName] = useState('null');
  const getMangas = () => {
    axios.get('http://localhost:4000/api/mangas').then((res) => {
      console.log(res);
    });
  };
  const getManga = () => {
    setName('loading...')
    axios
      .get('http://localhost:4000/api/mangas/mangas2')
      .then((res) => {
        console.log(res);

        setName(res.data.name);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <Button type="button" onClick={getMangas}>
        get mangas
      </Button>{' '}
      <Button type="button" primary onClick={getManga}>
        get manga
      </Button>
      {name}
    </>
  );
};

export default App;
