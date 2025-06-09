function solution(price, money, count) {
    // 놀이기구를 n번 이용하면 원래 이용료의 n배를 받음
    // 처음 이용료 100 => 2번 200 => 3번 300 (인상)
    // count번 타게 되면 현재 자신이 가진 금액에서 얼마가 모자라는지 반환 (답)
    // 단, 금액이 부족하지 않으면 0 반환 (예외 처리)
    
    // 3 6 9 12 => 30이니까 10 부족
    let sum = 0;
    
    for (let i = 1; i <= count; i += 1) {
        sum += price * i; 
    }
    
    return money - sum > 0 ? 0 : Math.abs(money - sum);
}