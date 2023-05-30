// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name

import { Planet } from "../data/data";

//  must have destructured parameters
export function findPlanetByMoon({
  planets,
  moonName,
}: {
  planets: Planet[];
  moonName: string;
}) {
  return planets
    .filter((planet) => "moonsCount" in planet)
    .find((planet) =>
      planet.moons!.includes(
        moonName.charAt(0).toUpperCase() + moonName.slice(1)
      )
    );
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
