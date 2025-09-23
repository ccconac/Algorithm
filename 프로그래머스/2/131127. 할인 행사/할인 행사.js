function solution(want, number, discount) {
    let answer = 0;
    
    function isMatch(products) {
        const map = new Map();
        
        products.forEach(product => map.set(product, (map.get(product) || 0) + 1));
        
        for (let i = 0; i < want.length; i++) {
            if (map.get(want[i]) !== number[i]) return false;
        }
        
        return true;
    }
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const products = discount.slice(i, i + 10);
        
        if (isMatch(products)) answer += 1;
    }
    
    return answer;
}