function solution(num_list) {
    const [sec, last] = num_list.slice(-2);
    last > sec ? num_list.push(last - sec) : num_list.push(last * 2);
   
    return num_list;
}