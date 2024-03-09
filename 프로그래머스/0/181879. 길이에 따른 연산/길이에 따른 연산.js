function solution(num_list) {
    const mul = (acc, v) => acc * v;
    const add = (acc, v) => acc + v;

    return num_list.length > 10
        ? num_list.reduce(add, 0)
        : num_list.reduce(mul, 1);
}