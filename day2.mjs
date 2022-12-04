import { readFileSync } from "fs";

const text = readFileSync("../input/input2.txt").toString("utf-8");
const rounds = text.split("\n");

const scores = {
	A: 1, // rock
	B: 2, // paper
	C: 3, // scissors
	X: 1, // rock
	Y: 2, // paper
	Z: 3, // scissors
};

// part1

let final1 = 0;

for (const [p1, _, p2] of rounds) {
	const [s1, s2] = [scores[p1], scores[p2]];
	final1 += s2;
	if (s1 === s2) {
		final1 += 3;
	} else if ((s2 > s1 && s2 - s1 !== 2) || s1 - s2 === 2) {
		final1 += 6;
	}
}

console.log(final1);

// part 2

let final2 = 0;

for (const [p1, _, outcome] of rounds) {
	const s1 = scores[p1];
	if (outcome === "X") { // lose
		final2 += s1 === 1 ? 3 : s1 - 1;
	} else if (outcome === "Y") { // tie
		final2 += s1 + 3;
	} else if (outcome === "Z") { // win
		final2 += (s1 === 3 ? 1 : s1 + 1) + 6;
	}
}

console.log(final2);
