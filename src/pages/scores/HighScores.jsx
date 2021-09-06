import React, { useContext, useEffect } from "react";
import { Layout } from "./Layout";
import { Navigation } from "./Navigation";
import { AppContext } from "../../context/Provider";
import { VStack, Heading } from "@chakra-ui/react";
import { Board } from "./Board";
import { sortArray } from "../../util";
import { useHistory } from "react-router-dom";

export function HighScores() {
  const history = useHistory();
  const { scores, setSelected, setSelectedScore, selectedScore, selected } =
    useContext(AppContext);

  useEffect(() => {
    const index = scores.findIndex((item) => item.category === "Sports");
    setSelected("Sports");
    setSelectedScore(scores[index]);
  }, []);

  // useEffect(() => {
  //   if (!selected && !selectedScore?.results) history.push("/");
  // }, [selected]);

  function handleChange(e) {
    const index = scores.findIndex((item) => item.category === e.target.value);
    setSelected(e.target.value);
    setSelectedScore(scores[index]);
  }

  return (
    <Layout>
      <Navigation handleChange={handleChange} />
      <VStack w="100%" maxW="xl">
        <Heading p="7.5rem 0">{selected}</Heading>
        {selectedScore && (
          <Board
            category={selected}
            data={sortArray(selectedScore.results || [])}
          />
        )}
      </VStack>
    </Layout>
  );
}
