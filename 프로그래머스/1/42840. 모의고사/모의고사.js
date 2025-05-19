function solution(answers) {
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const scores = [0, 0, 0];

  answers.forEach((answer, index) => {
    if (person1[index % person1.length] === answer) scores[0] += 1;
    if (person2[index % person2.length] === answer) scores[1] += 1;
    if (person3[index % person3.length] === answer) scores[2] += 1;
  });

  const maxScore = Math.max(...scores);

  const answer = [];
  scores.forEach((score, index) => {
    if (score === maxScore) answer.push(index + 1);
  });

  return answer;
}