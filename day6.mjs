import { readFileSync } from "fs";

const buffer = readFileSync("./input/input6.txt").toString("utf-8");

const isUniqueSet = (set) => {
	for (const char of set) {
		if (set.indexOf(char) !== set.lastIndexOf(char)) return false;
	}
	return true;
};

const findUnique = (count) => {
	let i = 0;
	while (i < buffer.length - count) {
		if (isUniqueSet(buffer.slice(i, i + count))) return i + count;
		i++;
	}
	return -1;
};

// part 1
console.log(findUnique(4));
// part 2
console.log(findUnique(14));
