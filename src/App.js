import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

import Title from './Title';
import Date from './Date';
import POD from './POD';
import PhotoExp from './PhotoExp';
import DateInput from "./DateInput";
import Dropdown from "./Dropdown";
import styled from 'styled-components';

const StyledHeader = styled.div `
  width: 100%;
  background-image: linear-gradient(black, #e8ebec);
  color: white;
  font-size: 4rem;
  height: 8rem;
  font-family: 'Saira Stencil One', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  img {
    width: 80px;
    height: 80px;
    margin-right: 1rem;
  }
`;

const StyledContainer = styled.div `
  width: 50vw;
  margin: 0 auto; 
  border: 1px solid #e8ebec;
  padding: 2rem;
  background-color: white;
`;

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
     setImgSrc('https://cdn.mos.cms.futurecdn.net/Bwj8cyLCtoHd7b5V3wJbin-320-80.jpg');
     setDate(response.data.date);
     setExplanation(response.data.explanation);
     console.log(response.data);
    })
    .catch(error => {
     
    })
  }, [currentAPI]);



  return (
    <div className="App">
      <StyledHeader>
        <img src='nasalogo.png'></img>
        NASA Astronomy Photo of the Day
        </StyledHeader>
        <StyledContainer>
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
      </StyledContainer>
    </div>
  );

}
export default App;
