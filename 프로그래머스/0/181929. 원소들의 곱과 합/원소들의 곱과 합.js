function solution(num_list) {
    const mul = num_list.reduce((acc, curr) => acc * curr, 1);
    const square = num_list.reduce((acc, curr) => acc + curr, 0) ** 2;
    
    return mul < square ? 1 : 0;
}