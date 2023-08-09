import readline from "readline/promises";
import process from "process";

// const input = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// input.question("Siapa nama anda?", (name) => {
// 	console.info(`Halo ${name}`);
// 	input.close();
// });

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const answer = await input.question("Siapa nama anda? ");

console.log(`Oh, so your name is ${answer}`);
input.close();
