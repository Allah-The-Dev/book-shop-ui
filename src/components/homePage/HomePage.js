import React from "react";
import { HomePageActionButton, HomePageContainer } from "./HomePage.style";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomePageContainer>
      <HomePageActionButton>
        <Link to={`books`}>Buy Books</Link>
      </HomePageActionButton>
    </HomePageContainer>
  );
};

Home.propTypes = {};

export default Home;
