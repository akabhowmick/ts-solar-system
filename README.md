## GETTING STARTED

- Clone this repository.
- Create a new repository in your Github account. Set it to be a public repo. Copy the new repo SSH path.
- Open the cloned repo project in your favorite IDE. Start a terminal session.
- Update/change the remote origin path with to the new SSH path **OR** add a new path (f.i "solved" or "destination"). [Github's git remote actions docs](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories).
- Push the main/master branch to the new repository.
- Run `npm i` to install dependencies and packages.
- Start solving the exercises, following the "HOW IT WORKS" section.

## HOW IT WORKS

You've done this before, now you get to do it again. This time with Typescript!

### Creating Types for `data`

The first step here is to create the types that are necessary to build the `data` object in `data.ts`. In the data.ts file write your types and make sure you include. You can also use interfaces if you wish. **This part will not be graded with tests,** and an instructor will review this manually. Make sure you do a thorough job.

Start by filling out the following types. Remember types can and should reference each other when it makes sense :)

```ts
export type MassData = {
  massValue: number;
  massExponent: number;
};

export type VolData = {
  volumeValue: number;
  volumeExponenet: number;
};

export type Planet = {
  id: string;
  name: string;
  isPlanet: true;
  mass: MassData;
  vol: VolumeData;
  gravity: number;
  avgTemp: number;
  moonsCount: number | undefined;
  moons: string[] | undefined;
};

export type Asteroid = {
  name: string;
  discoveryYear: number;
  orbitalPeriod: number;
};

export type AllData = {
  planets: Planet[];
  asteroids: Asteroid[];
};
```

### Getting through the tests

Running these tests should feel exactly the same as the first time you did this assignment, but the actual tests may change. For example maybe instead of taking in the entire data object for each function, a function may only be designed to receive an array of planets.

Let the tests, and naming of things be your guide 😄

Note: If typescript, or your linter is failing you are failing too! If you see red in your sidebar FIX IT!!!!!
![DONT LET THIS HAPPEN BEFORE YOU SUBMIT](images/Screen%20Shot%202023-02-25%20at%2012.56.27%20PM.png)

If you would like to check whether or not your types are all passing you can run `npm run check-types`

### DO NOT USE ANY!!!!

If there is a spot where you think you may need the flexibility of any, use a generic, or an unknown instead.
