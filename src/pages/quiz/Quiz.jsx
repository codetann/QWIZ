import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useQuiz } from "./hooks/useQuiz";
import { Progress, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { Results } from "./Results";

export function Quiz() {
  const { id, level, color, title } = useLocation().state;

  //const renderHTML = () => React.createElement(<Heading></Heading>, {dangerouslySetInnerHTML: ''})
  const parseHTML = (text) => {
    const p = document.createElement("p");
    p.innerHTML = text;
    return p.textContent;
  };

  const { checkAnswer, isFinished, score, answered, index, questions } =
    useQuiz(id, level);

  if (!questions) return <div>Loading</div>;

  return (
    <VStack maxW="xl" spacing="1rem">
      {index >= 11 && (
        <Results score={score} title={title} color={color} level={level} />
      )}
      {index <= 10 && (
        <>
          <Progress value={index * 10} />

          <Text>Question {index}/10</Text>
          <Heading
            p="3rem 0"
            textAlign="center"
            size="md"
            dangerouslySetInnerHTML={{ __html: questions[index - 1].question }}
          ></Heading>

          <VStack w="100%" spacing="1rem">
            {questions[index - 1].answers.map((question) => (
              <Button
                key={question}
                disabled={answered}
                value={question}
                onClick={checkAnswer}
                w="100%"
              >
                {parseHTML(question)}
              </Button>
            ))}
          </VStack>
        </>
      )}
    </VStack>
  );
}
