import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { SimpleGrid } from "@chakra-ui/react";
// components

import Category from "../components/Category";

export default function Home() {
  return (
    <HomePage>
      <CategoryContainer>
        {categories.map((item) => (
          <Category
            key={item.id}
            title={item.category}
            colors={item.colors}
            id={item.id}
          />
        ))}
      </CategoryContainer>
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

const CategoryContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
