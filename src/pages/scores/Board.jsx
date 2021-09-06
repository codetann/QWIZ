import React, { useState, useEffect } from "react";
import {
  VStack,
  Heading,
  HStack,
  Text,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export function Board({ data, category }) {
  // - Hooks
  const [easy, setEasy] = useState([]);
  const [medium, setMedium] = useState([]);
  const [hard, setHard] = useState([]);
  const history = useHistory();

  const bg = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  useEffect(() => {
    if (!data) return history.push("/");
    // resets state when the data changes.
    // without this, state will keep adding names to prevState when data changes
    setEasy([]);
    setMedium([]);
    setHard([]);

    data.forEach((item) => {
      if (item.data.difficulty === "easy")
        setEasy((prevState) => [...prevState, item]);
      if (item.data.difficulty === "medium")
        setMedium((prevState) => [...prevState, item]);
      if (item.data.difficulty === "hard")
        setHard((prevState) => [...prevState, item]);
    });
  }, [data, category]);

  return (
    <VStack w="100%" spacing="2rem">
      {/* EASY */}
      <VStack w="100%" bg={bg} p="3rem 0" borderRadius="md">
        <Heading color="green" pb="3rem">
          Easy
        </Heading>
        <Spacer />
        {easy.map((item, i) => (
          <HStack key={item.id} w="100%" p="0 3rem" spacing="1rem">
            <Heading size="md">#{i + 1}</Heading>

            <Text>{item.data.nickname}</Text>
            <Spacer />
            <Text>Score: {item.data.score}</Text>
          </HStack>
        ))}
      </VStack>
      {/* MEDIUM */}
      <VStack w="100%" bg={bg} p="3rem 0" borderRadius="md">
        <Heading color="yellow" pb="3rem">
          Medium
        </Heading>
        {medium.map((item, i) => (
          <HStack key={item.id} w="100%" p="0 3rem" spacing="1rem">
            <Heading size="md">#{i + 1}</Heading>

            <Text>{item.data.nickname}</Text>
            <Spacer />
            <Text>Score: {item.data.score}</Text>
          </HStack>
        ))}
      </VStack>
      {/* HARD */}
      <VStack w="100%" bg={bg} p="3rem 0" borderRadius="md">
        <Heading color="red" pb="3rem">
          Hard
        </Heading>
        {hard.map((item, i) => (
          <HStack key={item.id} w="100%" p="0 3rem" spacing="1rem">
            <Heading size="md">#{i + 1}</Heading>

            <Text>{item.data.nickname}</Text>
            <Spacer />
            <Text>Score: {item.data.score}</Text>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
}
