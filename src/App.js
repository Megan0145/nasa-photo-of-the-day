import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

import Title from './Title';
import Date from './Date';
import POD from './POD';
import PhotoExp from './PhotoExp';
import DateInput from "./DateInput";
import Dropdown from "./Dropdown";


function App() {
  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [explanation, setExplanation] = useState('');
  let [currentAPI, setAPI] = useState('https://api.nasa.gov/planetary/apod?api_key=nS6tRh40yy8GlsPn8pu2LzRay57KsvY9nRXqDhwp');

  
  const userUpdateAPIUrl = (val) => {
    setAPI(`https://api.nasa.gov/planetary/apod?api_key=nS6tRh40yy8GlsPn8pu2LzRay57KsvY9nRXqDhwp&date=${val}`);
}


  const updateAPIUrl = (evtvalue) => {
    if(evtvalue === '2012-03-14') {
      setAPI(currentAPI += '&date=2012-03-14');
    } else {
      setAPI('https://api.nasa.gov/planetary/apod?api_key=nS6tRh40yy8GlsPn8pu2LzRay57KsvY9nRXqDhwp');
    }
  }

  
  useEffect(() => {  
    axios.get(currentAPI)
    .then(response => {
     setTitle(response.data.title);
     setImgSrc(response.data.hdurl);
     setDate(response.data.date);
     setExplanation(response.data.explanation);
     console.log(response.data);
    })
    .catch(error => {
     
    })
  }, [currentAPI]);



  return (
    <div className="App">
      <h1>NASA Astronomy Photo of the Day</h1>
      <div className='updateDate'>
        <DateInput userUpdateAPIUrl={userUpdateAPIUrl} />
        <Dropdown updateAPIUrl={updateAPIUrl} />
      </div>
      <div className='main-body'>
       <div className='column-left'> 
        <POD source={imgSrc} />
        </div>
      <div className='column-right'>
          <Title title={title} />
          <Date date={date} />
          <PhotoExp explanation={explanation} />
      </div>
      </div>
    </div>
  );

}
export default App;
