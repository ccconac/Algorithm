function timeToSecond(time) {
    const timeToArray = time.split(':').map(Number);
    return timeToArray[0] * 60 + timeToArray[1];
}

function secondToTime(time) {
    return time.toString().padStart(2, '0');
}

/*
 * video_len: 동영상 길이
 * pos: 기능 수행 직전 재생 위치
 * op_start: 오프닝 시작 시간
 * op_end: 오프닝이 끝나는 시간
 * commands: 사용자의 입력
*/
function solution(video_len, pos, op_start, op_end, commands) {
    let currentTime = timeToSecond(pos);
    
    const videoLength = timeToSecond(video_len);
    const [opStart, opEnd] = [timeToSecond(op_start), timeToSecond(op_end)];
    
    commands.forEach((command) => {   
        if (currentTime >= opStart && currentTime <= opEnd) currentTime = opEnd;
        
        // 1. 10초 전: prev 입력 => 동영상 재생 위치 10초 전으로
        // 1-1. 현재 위치 10초 미만인 경우: 영상의 처음 위치 (0분 0초)
        if (command === 'prev') {
            if (currentTime < 10) currentTime = 0;
            else currentTime -= 10;
            
        // 2. 10초 후: next 입력 => 재생 위치 10초 후
        // 2-1. 남은 시간 10초 미만인 경우 => 마지막 위치로 (동영상 길이)
        } else {
            const remainingTime = videoLength - currentTime;
            
            if (remainingTime < 10) currentTime = videoLength;
            else currentTime += 10;
        }
        
        // 3. 오프닝 건너뛰기: 오프닝 구간인 경우 자동으로 오프닝이 끝나는 위치로 이동   
        if (currentTime >= opStart && currentTime <= opEnd) currentTime = opEnd;
    })
    
    let answer = [secondToTime(Math.floor(currentTime / 60)), secondToTime(currentTime % 60)].join(':');
    
    return answer;
}