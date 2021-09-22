/**
 * Commented out code related to storing high scores in firebase.
 */

import { useState } from "react";
import {
  Input,
  Text,
  Heading,
  VStack,
  Button,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
// import firebase from "firebase";
import { useHistory } from "react-router-dom";

export function Results({ score, title, color, level }) {
  // const [name, setName] = useState();
  // const [submitted, setSubmitted] = useState(false);
  const bg = useColorModeValue(`${color}.500`, `${color}.200`);
  const history = useHistory();

  const handleHome = () => history.push("/");
  // const handleChange = (e) => setName(e.target.value);
  // const handleSubmit = () => {
  //   if (submitted) return;
  //   const scoreRef = firebase.database().ref(title);
  //   const userScore = {
  //     nickname: name,
  //     score,
  //     difficulty: level,
  //   };
  //   scoreRef.push(userScore);
  //   setSubmitted(true);
  // };

  return (
    <VStack w="xl" spacing="2rem">
      <VStack
        h="15rem"
        align="center"
        justify="center"
        bg={bg}
        w="100%"
        borderRadius="md"
        shadow="md"
      >
        <Heading>{title}</Heading>
        <Text>Score: {score}</Text>
      </VStack>
      <Button onClick={handleHome} w="100%">
        Home
      </Button>
      {/* <Input placeholder="Enter name here" w="100%" onChange={handleChange} />
      <HStack w="100%">
        <Button
          disabled={!name || submitted}
          colorScheme={color}
          w="100%"
          onClick={handleSubmit}
        >
          {submitted ? "Thank You" : "Submit"}
        </Button>
      </HStack> */}
    </VStack>
  );
}
