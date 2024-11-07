const countWordOccurrences = (sentence: string, word: string): number => {
  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  const words = lowerCaseSentence.split(" ");
  //   console.log("words", words);

  const result = words.filter((w) => w === lowerCaseWord).length;

  return result;
};

// console.log(countWordOccurrences("I love typescript", "typescript"));
