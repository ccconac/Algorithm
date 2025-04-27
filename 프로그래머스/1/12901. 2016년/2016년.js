function solution(a, b) {
    const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let day = b + 4;
    
    for (let i = 0; i < a - 1; i += 1) day += days[i];
    
    return dayOfWeek[day % 7];
    
}