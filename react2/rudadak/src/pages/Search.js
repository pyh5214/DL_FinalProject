import React, {useState} from 'react';
import axios from 'axios';
import Searchinputjson from '../components/Searchinputjson.js';

const Search = () => {
  const [data, setData] = useState({
    name: ''
  });

  const {name} = data;

  const onChange = e => {
    const {name, value} = e.target;
    setData({
    ...data,
    [name]: value
    });
  };

  const reqData = JSON.stringify(data);

  const [resData, setResdata] = useState('');

  const url = 'http://127.0.0.1:8000/test/getMembers/' ;

  const onClick = async () => {
    try{
      const response = await axios.post(url, reqData,{
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });
      setResdata(response.data);
    } catch (e) {
      console.log(e)
    }
  };

  return(
    <div>
      <h1>친구탐색</h1>
      <p>보고싶은 친구를 탐색해보아요</p>
      <Searchinputjson
        name={name}
        onChange={onChange}
        onClick={onClick}
      />
      <br /><br />
      {data && <li>{data.name}</li>}

      <h2>결과보기</h2>
      {resData && <li>name: {resData[0].name}</li>}
      {resData && <li>id: {resData[0].id}</li>}
      


      <br /><br /><br />
      <button type="submit" onClick={onClick}>탐색 테스트</button>
      <br />
      {resData && <textarea rows={15} value={JSON.stringify(resData, null, 2)} readOnly={true}/>}

    </div>
  );
};

export default Search;