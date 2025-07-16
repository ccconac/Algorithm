function solution(ingredient) {
    // 빵(1) - 야채(2) - 고기(3) - 빵(1)
    const stack = [];
    let answer = 0;
    
    ingredient.forEach((i) => {
        stack.push(i);
        
        if (stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            answer += 1;
        }
    })
    
    return answer;
}