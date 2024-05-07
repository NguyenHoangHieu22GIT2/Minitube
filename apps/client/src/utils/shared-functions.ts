const isUndefinedOrNull = (value: unknown): boolean => {
  return value === null || typeof value === "undefined";
};

const noop = () => {};

const mergeArray = <A extends any[], B extends any[]>(
  a: A,
  b: B,
): [...A, ...B] => {
  return [...a, ...b];
};

export { isUndefinedOrNull, noop, mergeArray };
