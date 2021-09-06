import React from "react";
import { VStack } from "@chakra-ui/react";

export function Layout({ children }) {
  return (
    <VStack w="100%" maxW="100vw" minH="100vh" align="center" p="2rem">
      <VStack w="100%" maxW="1000px" spacing="2rem">
        {children}
      </VStack>
    </VStack>
  );
}
