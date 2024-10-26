const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;

const string = (a: string, b: string) => {
  if (process.env.NEW_FEATUREA === "false") {
    return undefined;
    // or return null/undefined depending on your needs
  }

  return `${a} and ${b}`;
};

export { add, subtract, multiply, divide, string };
