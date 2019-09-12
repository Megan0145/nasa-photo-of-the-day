import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Title from "./Title";
import Date from "./Date";
import POD from "./POD";
import PhotoExp from "./PhotoExp";
import DateInput from "./DateInput";
import Dropdown from "./Dropdown";
import { StyledContainer,
  StyledHeader,
  StyledH1,
  StyledInfoContainer,
  StyledInputContainer} from "./AppStyles";



function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [explanation, setExplanation] = useState("");
  let [currentAPI, setAPI] = useState(
    "https://api.nasa.gov/planetary/apod?api_key=nS6tRh40yy8GlsPn8pu2LzRay57KsvY9nRXqDhwp"
  );

  const userUpdateAPIUrl = val => {
    setAPI(
      `https://api.nasa.gov/planetary/apod?api_key=nS6tRh40yy8GlsPn8pu2LzRay57KsvY9nRXqDhwp&date=${val}`
    );
  };

  const updateAPIUrl = evtvalue => {
    if (evtvalue === "2012-03-14") {
      setAPI((currentAPI += "&date=2012-03-14"));
    } else {
      setAPI(
        "https://api.nasa.gov/planetary/apod?api_key=nS6tRh40yy8GlsPn8pu2LzRay57KsvY9nRXqDhwp"
      );
    }
  };

  useEffect(() => {
    axios
      .get(currentAPI)
      .then(response => {
        setTitle(response.data.title);
        setImgSrc(response.data.url);
        setDate(response.data.date);
        setExplanation(response.data.explanation);
        console.log(response.data);
      })
      .catch(error => {});
  }, [currentAPI]);

  return (
    <div className="App">
      <StyledHeader>
        <img src="nasalogo.png"></img>
        NASA Astronomy Photo of the Day
      </StyledHeader>
      <StyledContainer>
        <StyledH1>
          <Title title={title} />
          <Date date={date} />
        </StyledH1>

        <POD source={imgSrc} />

        <StyledInfoContainer>
          <PhotoExp explanation={explanation} />
          <StyledInputContainer>
            <h3>Choose Another Date</h3>
            <Dropdown updateAPIUrl={updateAPIUrl} />
            <DateInput userUpdateAPIUrl={userUpdateAPIUrl} />
          </StyledInputContainer>
        </StyledInfoContainer>
      </StyledContainer>
    </div>
  );
}
export default App;
