const input = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

const [N, M] = input;

const visited = new Array(N);
const output = [];
let result = "";

const DFS = (index, count) => {
  if (count === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = index; i < N; i++) {
    if (visited[i] === true) continue;

    visited[i] = true;
    output.push(i + 1);
    DFS(i, count + 1);
    output.pop();
    visited[i] = false;
  }
};

DFS(0, 0);
console.log(result.trim());