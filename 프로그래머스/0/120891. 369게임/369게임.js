function solution(order) {
    const orderArray = order.toString().split('');
    
    return orderArray.filter(number => number === '3' || number === '6' || number === '9').length;
}