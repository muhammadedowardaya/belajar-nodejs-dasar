import util from "util";

const nama = "Muhammad Edo Wardaya";

console.info(util.format("Nama : %s", nama));

const Person = {
	firstName: "Muhammad",
	lastName: "Wardaya",
};

console.info(util.format("Person : %j", Person));
