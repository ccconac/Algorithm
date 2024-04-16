function solution(order) {
    return Array.from(order.toString()).filter(n => ['3', '6', '9'].includes(n)).length;
}