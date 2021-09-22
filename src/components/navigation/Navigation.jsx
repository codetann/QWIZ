// Removed High Score button to make project be explorable by employers

import { useHistory } from "react-router";
import {
  HStack,
  Heading,
  Spacer,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const history = useHistory();

  return (
    <HStack w="100%">
      <Heading cursor="pointer" onClick={() => history.push("/")}>
        Qwiz
      </Heading>
      <Spacer />
      {/* <Button onClick={handleLink}>High Scores</Button> */}
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      />
    </HStack>
  );
}
