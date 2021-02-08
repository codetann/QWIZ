export function parseData(data) {
  const questions = [];

  data.forEach((item) => {
    // add correct answer to answer array
    const answers = [...item.incorrect_answers];
    answers.push(item.correct_answer);

    questions.push({
      correct_answer: item.correct_answer,
      question: item.question,
      answers: shuffle(answers),
    });
  });
  return questions;
}

export function parseArray(data, category) {
  if (category === null || category === undefined) return;
  if (data === null) return;
  const tempArr = Object.keys(data).map((key) => {
    return { id: key, data: data[key] };
  });
  return {
    category: category,
    results: tempArr,
  };
}

// sorting function for highscores
export function sortArray(arr) {
  return arr.sort((a, b) => {
    return b.data.score - a.data.score;
  });
}

// - Helper Functions
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
