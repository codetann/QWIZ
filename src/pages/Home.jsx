import React from "react";
import styled from "styled-components";
import { categories } from "../data";
// components
import AppBar from "../components/AppBar";
import Category from "../components/Category";

export default function Home() {
  return (
    <HomePage>
      <AppBar />
      {categories.map((item) => (
        <Category
          key={item.id}
          title={item.category}
          colors={item.colors}
          id={item.id}
        />
      ))}
    </HomePage>
  );
}

// - Styled Components - //
const HomePage = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #252c4a;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
