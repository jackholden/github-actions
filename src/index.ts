import { add, string } from "./maths";

console.log("Bun says hi");
console.log(`bun says 5+5=? ${add(5, 5)}`);
console.log(`bun says hello world=? ${string("gello", "world")}`);
console.log(process.env.PROJECT_NAME);

