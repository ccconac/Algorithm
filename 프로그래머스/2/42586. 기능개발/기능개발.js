function solution(progresses, speeds) {
    const answer = [1];
    const deployDays = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    let deployDay = deployDays[0];
    
    for (let i = 1, j = 0; i < deployDays.length; i++) {
        if (deployDays[i] <= deployDay) answer[j] += 1;
        else {
            deployDay = deployDays[i];
            answer[++j] = 1;
        }
    }
    
    return answer;
}