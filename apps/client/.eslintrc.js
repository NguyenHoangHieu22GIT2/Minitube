module.exports = {
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["@hoanghieu/eslint-config"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
};
