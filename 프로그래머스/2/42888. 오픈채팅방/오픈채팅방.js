function solution(record) {
    const userInfo = {};
    const openchatLog = [];
    
    record.forEach((log) => {
        const [command, uid, nickname] = log.split(' ');
        
        if (command === 'Enter') {
            userInfo[uid] = nickname;
            openchatLog.push(`${uid}님이 들어왔습니다.`);
        } else if (command === 'Leave') {
            openchatLog.push(`${uid}님이 나갔습니다.`);
        } else if (command === 'Change') {
            userInfo[uid] = nickname;
        }
    });
    
    const answer = openchatLog.map((log) => {
        const uid = log.split('님이')[0];
        return log.replace(uid, userInfo[uid]);
    });
    
    return answer;
}