import { readFileSync } from "fs";

const input = readFileSync("./input/input5.txt").toString("utf-8").split("\n");
const mid = input.indexOf("");
const rows = input.slice(0, mid);
const moves = input.slice(mid + 1);

const buildQueues = () => {
	const deck = [];
	for (let i = 0; i < rows.length - 1; i++) {
		const row = rows[i];
		let col = 0;
		for (let j = 1; j < row.length; j += 4) {
			col++;
			const space = row[j];
			if (space === " ") continue;
			deck[col] ||= [];
			deck[col].unshift(space);
		}
	}
	return deck;
};

// part 1
const moveCrates9000 = (deck) => {
	for (const move of moves) {
		let [_move, amount, _from, prev, _to, next] = move.split(" ");
		while (amount > 0) {
			const crate = deck[prev].pop();
			deck[next].push(crate);
			amount--;
		}
	}
};

// part 2
const moveCrates9001 = (deck) => {
	for (const move of moves) {
		let [_move, amount, _from, prev, _to, next] = move.split(" ");
		const prevStack = deck[prev];
		const cratesToMove = prevStack.splice(prevStack.length - amount);
		deck[next].push(...cratesToMove);
	}
};

const findTopCrates = (part) => {
	const deck = buildQueues();
	part === 1 ? moveCrates9000(deck) : moveCrates9001(deck);
	return deck
		.slice(1)
		.map((col) => col.pop())
		.join("");
};

console.log(findTopCrates(1));
console.log(findTopCrates(2));
