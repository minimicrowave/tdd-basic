import { getLetterCount } from "./letter-count";
import { removeWhiteSpaces } from "../utils";

export function isAnagram(stringA, stringB) {
  const stringACount = getLetterCount(removeWhiteSpaces(stringA.toLowerCase()));
  const stringBCount = getLetterCount(removeWhiteSpaces(stringB.toLowerCase()));

  for (const [letter, count] of Object.entries(stringACount)) {
    if (!stringBCount[letter] || stringBCount[letter] !== count) {
      return false;
    }
  }

  return true;
}
