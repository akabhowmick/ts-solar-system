// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";
import { maxBy } from "./e17";

type DiscoveryYear = {
  discoveryYear: number;
  count: number;
};

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  var discoveryYearFreq: DiscoveryYear[] = [];
  asteroids.map((asteroid) => {
    let year = discoveryYearFreq.find(
      (foundYear) => foundYear.discoveryYear === asteroid.discoveryYear
    );
    if (year) {
      year.count = year.count + 1;
    } else {
      let yearObject = {
        discoveryYear: asteroid.discoveryYear,
        count: 1,
      };
      discoveryYearFreq.push(yearObject);
    }
  });
  const greatestDiscoveryYear = maxBy(
    discoveryYearFreq,
    (discoveryYear: DiscoveryYear) => discoveryYear.count
  );
  return greatestDiscoveryYear?.discoveryYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
