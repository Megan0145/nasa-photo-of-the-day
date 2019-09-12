import styled from 'styled-components';

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

export {
    StyledContainer,
    StyledHeader,
    StyledH1,
    StyledInfoContainer,
    StyledInputContainer
};