function solution(seoul) {
    let location = 0;
    seoul.forEach((person, index) => {
        if (person === 'Kim') location = index;
    })
    
    return `김서방은 ${location}에 있다`
}