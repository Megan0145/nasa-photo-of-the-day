import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

import Title from './Title';
import Date from './Date';
import POD from './POD';
import PhotoExp from './PhotoExp';
import DateInput from "./DateInput";
import Dropdown from "./Dropdown";
// import axios from 'axios';




function App() {
  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [explanation, setExplanation] = useState('');
  const [currentInput, setInput] = useState('');
  let [currentAPI, setAPI] = useState('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');

  const updateAPIUrl = (evtvalue) => {
    if(evtvalue === '2012-03-14') {
      setAPI(currentAPI += '&date=2012-03-14');
    } else {
      setAPI('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
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

      {/* <DateInput currentInput={currentInput} setInput={setInput} updateApiUrl={updateApiUrl}/> */}
      <Dropdown updateAPIUrl={updateAPIUrl}/>

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
