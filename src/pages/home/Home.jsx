import React from "react";
import { Categories } from "../../utils/triviaDB";
import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card";

export function Home() {
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} w="100%" spacing="2rem">
      {Categories.map((c, i) => (
        <Card key={i} icon={c.icon} name={c.name} color={c.color} id={c.id} />
      ))}
    </SimpleGrid>
  );
}
