import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  VStack,
  HStack,
  Button,
  Center,
  Box,
  Text,
  useColorModeValue,
  ButtonGroup,
} from "@chakra-ui/react";

export function Setup() {
  const history = useHistory();
  const { title, id, color, icon } = useLocation().state;
  const [level, setLevel] = useState("easy");
  const text = useColorModeValue("white", "black");
  const bg = useColorModeValue(`${color}.500`, `${color}.200`);

  const changeLevel = (e) => {
    setLevel(e.target.id);
  };

  const handleBack = () => history.push("/");
  const handleStart = () => {
    console.log(id);
    history.push({
      pathname: `/quiz/${title}`,
      state: { id, level, color, title },
    });
  };

  return (
    <VStack w="100%" maxW="xl" spacing="4rem">
      <Center h="15rem" bg={bg} borderRadius="lg" w="100%" shadow="md">
        <HStack color={text}>
          <Box className={icon} />
          <Text fontWeight="600">{title}</Text>
        </HStack>
      </Center>
      <HStack w="100%" justify="center">
        <ButtonGroup isAttached w="100%">
          <Button
            colorScheme="green"
            variant={level === "easy" ? "solid" : "outline"}
            w="100%"
            onClick={changeLevel}
            id="easy"
          >
            Easy
          </Button>
          <Button
            colorScheme="yellow"
            variant={level === "medium" ? "solid" : "outline"}
            w="100%"
            id="medium"
            onClick={changeLevel}
          >
            Medium
          </Button>
          <Button
            colorScheme="red"
            variant={level === "hard" ? "solid" : "outline"}
            w="100%"
            id="hard"
            onClick={changeLevel}
          >
            Hard
          </Button>
        </ButtonGroup>
      </HStack>
      <HStack w="100%">
        <Button variant="ghost" onClick={handleBack} w="100%">
          Back
        </Button>
        <Button colorScheme={color} onClick={handleStart} w="100%">
          Start
        </Button>
      </HStack>
    </VStack>
  );
}
