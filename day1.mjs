import { readFileSync } from "fs";

const text = readFileSync("../input/input1.txt").toString("utf-8");
const calories = text.split("\n");

const elves = [];
let currElf = 0;

// part 1

for (const cal of calories) {
	const numCal = parseInt(cal);
	if (!numCal) {
		currElf++;
	} else {
		elves[currElf] = (elves[currElf] || 0) + numCal;
	}
}

console.log(Math.max(...elves));

// part 2

const sum = elves
	.sort((a, b) => b - a)
	.slice(0, 3)
	.reduce((sum, num) => sum + num, 0);

console.log(sum);
