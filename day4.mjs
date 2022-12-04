import { readFileSync } from "fs";

const text = readFileSync("./input/input4.txt").toString("utf-8");
const pairs = text.split("\n");

let fullOverlaps = 0;
let anyOverlaps = 0;

for (const pair of pairs) {
	const [elf1, elf2] = pair.split(",");
	const [e1a, e1b] = elf1.split("-");
	const [e2a, e2b] = elf2.split("-");
	// part 1
	const [minStart, maxEnd] = [Math.min(e1a, e2a), Math.max(e1b, e2b)];
	if ((e1a == minStart && e1b == maxEnd) || (e2a == minStart && e2b == maxEnd)) fullOverlaps++;
	// part 2
	const [maxStart, minEnd] = [Math.max(e1a, e2a), Math.min(e1b, e2b)];
	if (maxStart <= minEnd) anyOverlaps++;
}

console.log("🚀 • fullOverlaps", fullOverlaps);
console.log("🚀 • anyOverlaps", anyOverlaps);
