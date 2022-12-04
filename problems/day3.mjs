import { readFileSync } from "fs";

const text = readFileSync("../input/input3.txt").toString("utf-8");
const sacks = text.split("\n");

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const options = alphabet.concat(alphabet.map((letter) => letter.toUpperCase()));

// part 1

const getDup = (sack) => {
	const mid = sack.length / 2;
	const first = sack.slice(0, mid);
	const second = sack.slice(mid);
	return first.split("").find((letter) => second.includes(letter));
};

const getSum = (sacks) => {
	const priorities = sacks.map((sack) => options.indexOf(getDup(sack)) + 1);
	return priorities.reduce((sum, curr) => sum + curr, 0);
};

console.log(getSum(sacks));

// part 2

const getGroups = (sacks) => {
	const groups = [];
	const groupSize = 3;
	for (let i = 0; i < sacks.length; i += groupSize) {
		const group = sacks.slice(i, i + groupSize);
		groups.push(group);
	}
	return groups;
};

const getCommon = (group) => {
	const [first, second, third] = group;
	const common = first
		.split("")
		.find((letter) => second.includes(letter) && third.includes(letter));
	return common;
};

const getGroupSum = (sacks) => {
	const groups = getGroups(sacks);
	const commons = groups.map((group) => getCommon(group));
	return commons.reduce((sum, common) => sum + options.indexOf(common) + 1, 0);
};

console.log(getGroupSum(sacks));
