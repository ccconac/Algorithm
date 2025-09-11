function solution(progresses, speeds) {
    const answer = [];
    
    const days = progresses.map((progress, index) => {
        const day = Math.ceil((100 - progress) / speeds[index]);
        
        return day;
    })
    
    let i = 0;
    while (i < days.length) {
        let count = 1; 
        let currentDeployDay = days[i]; 
        let j = i + 1;
        
        while (j < days.length && days[j] <= currentDeployDay) {
            count += 1;
            j += 1;
        }

        answer.push(count); 
        i = j; 
    }

    return answer;
}