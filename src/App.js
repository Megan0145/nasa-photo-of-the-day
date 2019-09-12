import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Title from "./Title";
import Date from "./Date";
import POD from "./POD";
import PhotoExp from "./PhotoExp";
import DateInput from "./DateInput";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import AppStyles from "./AppStyles";

const StyledContainer = styled.div`
  width: 70vw;
  margin: 0 auto 2rem auto;
  border: 1px solid #e8ebec;
  padding: 3rem;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  width: 100%;
  background-image: linear-gradient(black, #e8ebec);
  color: white;
  font-size: 3.5rem;
  height: 8rem;
  font-family: "Saira Stencil One", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  img {
    width: 80px;
    height: 80px;
    margin-right: 1rem;
    transition: transform 0.8s ease-in-out;
    :hover {
      transform: rotate(360deg);
    }
  }
`;

const StyledH1 = styled.h1`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  text-align: left;
  .title h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .date h3 {
    font-size: 1.8rem;
  }
`;

const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 2rem 0;

  .photo-exp {
    width: 60%;
    margin-right: 1rem;
    p {
      font-size: 1.3rem;
      line-height: 1.4;
    }
  }
`;
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  flex-wrap: wrap;
  align-items: baseline;
  /* border: 1px solid grey; */

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .date-dropdown select {
    width: 17vw;
    height: 3vw;
    border: 1px solid grey;
    margin-bottom: 2vw;
  }
  .date-input input {
    width: 16vw;
    height: 2.7vw;
    border: 1px solid grey;
    padding-left: 10px;
    border-radius: 7px;
    margin-bottom: 2vw;
  }
  .date-input button {
    width: 17vw;
    height: 2.7vw;
    border: 1px solid grey;
    padding-left: 10px;
    border-radius: 7px;
    margin-bottom: 2vw;
    cursor: pointer;
    background-color: #e8ebec;
    font-size: 1.2rem;
  }
`;

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
