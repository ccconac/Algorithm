function solution(participant, completion) {
    // 한 명의 선수를 제외하고 모든 선수가 마라톤 완주
    // 완주하지 못한 선수의 이름을 반환
    
    // 1. participant와 completion 비교
    // 1-1. participant 돌면서 completion includes로 찾기
    // 1-2. 없으면 반환
    
    participant = participant.sort();
    completion = completion.sort();
    
    for (let i = 0; i < participant.length; i += 1) {
        if (participant[i] !== completion[i]) return participant[i];
    }
}