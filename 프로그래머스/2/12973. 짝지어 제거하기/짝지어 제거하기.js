function solution(s) {
    // 1. 같은 알파벳이 2개 붙어 있는 짝을 찾음
    // 2. 둘을 제거한 뒤 앞뒤로 문자열을 이어 붙임
    // 3. 위 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기 종료
    
    const stack = [];
    
    [...s].forEach((c) => {
        if (stack[stack.length - 1] === c) stack.pop();
        else stack.push(c);
    })
    
    return stack.length ? 0 : 1;
}