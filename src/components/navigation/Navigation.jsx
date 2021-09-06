import React from "react";
import { useHistory } from "react-router";
import {
  HStack,
  Heading,
  Button,
  Spacer,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const history = useHistory();

  const handleLink = () => {
    history.push("/highscores");
  };

  return (
    <HStack w="100%">
      <Heading cursor="pointer" onClick={() => history.push("/")}>
        Qwiz
      </Heading>
      <Spacer />
      <Button onClick={handleLink}>High Scores</Button>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      />
    </HStack>
  );
}
