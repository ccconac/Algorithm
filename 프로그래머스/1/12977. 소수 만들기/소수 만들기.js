function isPrime(number) {
    if (number < 2) return 1;
    
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i === 0) return 0;
    }
    
    return 1;
}

function solution(nums) {
    let answer = 0;
    
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            for (let k = j + 1; k < nums.length; k += 1) {
                const sum = nums[i] + nums[j] + nums[k];
                
                if (isPrime(sum)) answer += 1;
            }
        }
    }
    
    return answer;
}