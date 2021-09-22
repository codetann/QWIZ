import { Box, Button, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
//import CardModal from "./CardModal";

export function Card({ name, icon, id, color }) {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: "/setup",
      state: { title: name, id, color, icon },
    });
  };

  return (
    <Button h="15rem" colorScheme={color} onClick={handleClick}>
      <Box className={icon}></Box>
      <Text ml=".5rem">{name}</Text>
    </Button>
  );
}
