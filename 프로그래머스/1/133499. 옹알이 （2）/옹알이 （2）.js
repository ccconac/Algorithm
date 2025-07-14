function solution(babbling) {
    // aya, ye, woo, ma 네 가지 발음과
    // 네 가지 발음을 조합해 만들 수 있는 발음만 가능
    // 단, 연속해서 같은 발음 못함
    let answer = 0;
    const possibleBabbling = ["aya", "ye", "woo", "ma"];
    
    const noRepeatBabbling = babbling.filter((value) => {
        return possibleBabbling.every((babble) => !value.includes(babble.repeat(2)));
    });
        
    noRepeatBabbling.forEach((babble) => {
        const canBabble = babble.replace(/aya|ye|woo|ma/g,"").length;
        if (!canBabble) answer += 1;
    });
    
    return answer;
}