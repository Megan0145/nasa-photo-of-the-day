import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

import Title from './Title';
import Date from './Date';
import POD from './POD';
import PhotoExp from './PhotoExp';
// import axios from 'axios';


const APODApi = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

function App() {
  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [explanation, setExplanation] = useState('');
  
  useEffect(() => {  
    axios.get(APODApi)
    .then(response => {
     setTitle(response.data.title);
     setImgSrc(response.data.hdurl);
     setDate(response.data.date);
     setExplanation(response.data.explanation);
    })
    .catch(error => {
     
    })
  }, []);



  return (
    <div className="App">
      <h1>NASA Astronomy Photo of the Day</h1>
      <Title title={title} />
      <Date date={date} />
      <POD source={imgSrc} />
      <PhotoExp explanation={explanation} />
    </div>
  );

}
export default App;
