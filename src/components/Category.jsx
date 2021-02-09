/* 
Component used to display each category on the Home page 

Each component has a Link that takes the user to the Quiz page to start the game
  - sends state to the page to tell it what info to use
*/

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Category({ colors, title, id }) {
  return (
    <Link
      className="Link"
      to={{ pathname: "/quiz", state: { title, id, colors } }}
    >
      <Container style={{ background: colors.background, color: colors.color }}>
        <Title>{title}</Title>
      </Container>
    </Link>
  );
}

// - Styled Components
const Container = styled.div`
  width: 300px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Title = styled.h2`
  letter-spacing: 1.5px;
`;
