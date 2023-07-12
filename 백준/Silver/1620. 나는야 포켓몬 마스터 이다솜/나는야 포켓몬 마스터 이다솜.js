const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ');
const pokemon = [];
const problem = [];

const stringMap = new Map();
const numberMap = new Map();
const solution = [];

for (let i = 1; i <= N; i++) {
    pokemon.push(input[i]);
}

for (let i = pokemon.length + 1; i < input.length; i++) {
    problem.push(input[i]);
}

pokemon.forEach((v, i) => stringMap.set(v, i + 1));
pokemon.forEach((v, i) => numberMap.set((i + 1).toString(), v));

problem.forEach((v, i) => {
    if (numberMap.has(v)) solution.push(numberMap.get(v));
    if (stringMap.has(v)) solution.push(stringMap.get(v)); 
})

for (let i = 0; i < solution.length; i++) {
    console.log(solution[i]);
}