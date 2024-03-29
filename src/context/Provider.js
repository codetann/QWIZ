import React, { useState, createContext, useEffect } from "react";
import firebase from "../firebase";
import { Categories } from "../utils/triviaDB";
import { parseArray } from "../utils/parse";

export const AppContext = createContext();

export default function Provider({ children }) {
  const [scores, setScores] = useState([]);
  const [selected, setSelected] = useState("");
  const [selectedScore, setSelectedScore] = useState([]);

  useEffect(() => {
    const arr = [];
    /* Filters through each category and creates an array with the 
            data that was received through firebase. If there is no data returned,
            an object is created with an the category and no results.
        */
    Categories.forEach((item) => {
      const scoreRef = firebase.database().ref(item.name);

      scoreRef.on("value", (snapshot) => {
        if (snapshot.val() === null)
          arr.push({ category: item.name, results: [] });
        arr.push(parseArray(snapshot.val(), item.name));
      });
    });

    const newArr = arr.filter((element) => element !== undefined);
    setScores(newArr);

    const index = newArr.findIndex((item) => item.category === selected);
    setSelectedScore(newArr[index]);
  }, [selected]);
  return (
    <AppContext.Provider
      value={{ scores, setSelected, setSelectedScore, selectedScore, selected }}
    >
      {children}
    </AppContext.Provider>
  );
}
