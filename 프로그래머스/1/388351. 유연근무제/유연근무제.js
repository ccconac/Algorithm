function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    timelogs.forEach((logs, index) => {
        const schedule = Math.floor(schedules[index] / 100) * 60 + schedules[index] % 100;
        let success = true;
        
        for (let i = 0; i < 7; i += 1) {
            const day = (startday + i) % 7;
            const time = Math.floor(logs[i] / 100) * 60 + logs[i] % 100;
              
            // 6 0 (토, 일) 주말 제외
            if (day === 6 || day === 0) continue;
            
            if (time - schedule > 10) {
                success = false;
                break;
            }
        }
        
        if (success) answer += 1;
    })
    
    return answer;
}