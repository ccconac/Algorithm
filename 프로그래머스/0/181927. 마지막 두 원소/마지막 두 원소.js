function solution(num_list) {
    const answer = [...num_list];
    const prevNumber = num_list[num_list.length - 2];
    const lastNumber = num_list[num_list.length - 1];
    
    if (lastNumber > prevNumber) answer.push(lastNumber - prevNumber);
    if (lastNumber <= prevNumber) answer.push(lastNumber * 2);
    
    return answer;
}