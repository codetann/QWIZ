import React from "react";
import { useHistory } from "react-router";
import {
  HStack,
  Heading,
  Spacer,
  useColorMode,
  IconButton,
  Select,
  Box,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Categories } from "../../utils/triviaDB";

export function Navigation({ handleChange }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const history = useHistory();

  const handleBack = () => history.push("/");

  return (
    <HStack w="100%">
      <HStack
        align="center"
        justify="center"
        spacing="1rem"
        onClick={handleBack}
        cursor="pointer"
      >
        <Box fontSize="22px" className="fas fa-chevron-left"></Box>
        <Heading>Back</Heading>
      </HStack>
      <Spacer />
      <Select w="auto" placeholder="Select category" onChange={handleChange}>
        {Categories.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </Select>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      />
    </HStack>
  );
}
