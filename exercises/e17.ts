export const minBy = <Type>(array: Type[], cb: (input : Type) => void) => {
  if (!array[0]) {
    return undefined;
  }
  let minimum: Type = array[0];
  for (let element of array) {
    if (cb(element) < cb(minimum)) {
      minimum = element;
    }
  }
  return minimum;
};

export function maxBy<Type>(array: Type[], cb: (input : Type) => void) {
  if (!array[0]) {
    return undefined;
  }
  let maximum: Type = array[0];
  for (let element of array) {
    if (cb(element) > cb(maximum)) {
      maximum = element;
    }
  }
  return maximum;
}
