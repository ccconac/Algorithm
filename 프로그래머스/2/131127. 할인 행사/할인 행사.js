function isMatch(want, products, number) {
    const map = new Map();
        
    products.forEach(product => map.set(product, (map.get(product) || 0) + 1));
        
    for (let i = 0; i < want.length; i++) {
        if (map.get(want[i]) !== number[i]) return false;
    }
        
    return true;
}

function solution(want, number, discount) {
    let answer = 0;
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const products = discount.slice(i, i + 10);
        
        if (isMatch(want, products, number)) answer += 1;
    }
    
    return answer;
}