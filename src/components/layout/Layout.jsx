import React from "react";
import { VStack } from "@chakra-ui/react";
import { Navigation } from "../navigation";

export function MainLayout({ children }) {
  return (
    <VStack w="100%" maxW="100vw" minH="100vh" align="center" p="2rem">
      <VStack w="100%" maxW="1000px" spacing="2rem">
        <Navigation />
        {children}
      </VStack>
    </VStack>
  );
}
