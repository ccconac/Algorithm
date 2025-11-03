function solution(answers) {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const scores = [0, 0, 0];
    
    answers.forEach((answer, index) => {
        if (answer === first[index % first.length]) scores[0] += 1;
        if (answer === second[index % second.length]) scores[1] += 1;
        if (answer === third[index % third.length]) scores[2] += 1;
    });
    
    const maxScore = Math.max(...scores);
    const answer = [];
            
    scores.forEach((score, index) => {
        if (maxScore === score) answer.push(index + 1);
    });
    
    return answer;
}