function isUndefinedOrNull(value: unknown): boolean {
  return value === null || typeof value === "undefined";
}

const noop = () => {};
