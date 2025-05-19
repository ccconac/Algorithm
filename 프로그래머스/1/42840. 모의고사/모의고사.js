function solution(answers) {
  // 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
  // 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
  // 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < answers.length; j += 1) {
      if (patterns[i][j % patterns[i].length] === answers[j]) scores[i] += 1;
    }
  }

  const maxScore = Math.max(...scores);

  const answer = scores.map((score, index) => {
    if (score === maxScore) return index + 1;
    return 0;
  });

  return answer.filter((number) => number !== 0);
}