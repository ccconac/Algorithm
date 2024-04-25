function solution(num_list) {
    const odd = num_list.filter(number => number % 2).join('');
    const even = num_list.filter(number => number % 2 === 0).join('');
    
    return Number(odd) + Number(even);
}