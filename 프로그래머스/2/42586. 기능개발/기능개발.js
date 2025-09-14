function solution(progresses, speeds) {
    // 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됨
    // 배포는 하루에 한 번 하루의 끝
    
    // 93%에 1%씩이면 7일, 30%에 30%씩이면 3일
    // 100 - 93 / 1 = 7, 100 - 30 / 30 = 3 (올림)
    const answer = [];
    const deployDays = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    let i = 0;
    while (i < deployDays.length) {
        let functionCount = 1;
        let currentDeployDay = deployDays[i];
        let j = i + 1;
        
        while (j < deployDays.length && deployDays[j] <= currentDeployDay) {
            functionCount += 1;
            j += 1;
        }
        
        answer.push(functionCount);
        i = j;
    }
    
    return answer;
}