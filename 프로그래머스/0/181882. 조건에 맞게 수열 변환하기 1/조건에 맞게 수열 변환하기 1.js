function solution(arr) {
    return arr.map(number => {
        if (number >= 50 && number % 2 === 0) return Math.floor(number / 2)
        if (number < 50 && number % 2) return number * 2
        
        return number
    })
}