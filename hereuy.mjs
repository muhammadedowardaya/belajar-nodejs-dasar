import process from "process";
import readline from "readline/promises";

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const hasil = await input.question("Saha ngaran maneh? ");
console.info(`Halo ${hasil}, pasti kamu jomblo ya...`);
input.close();
