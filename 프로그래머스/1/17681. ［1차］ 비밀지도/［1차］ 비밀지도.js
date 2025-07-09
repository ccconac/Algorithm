// 이진수 변환 함수 (2)
function changeBinary(n, arr) {
    return arr.map((number) => {
        return number.toString(2).padStart(n, '0');
    });
}

function solution(n, arr1, arr2) {
    // n = 5 / arr1 = [9, 20, 28, 18, 11] / arr2 = [30, 1, 21, 17, 28]
    
    // 1. 정수를 이진수로 변환 (이진수 변환 함수가 있으면 좋을 듯)
    // 1-1. 정수를 2로 나눔
    // 1-2. 여기서 나온 나머지를 나열하고 역순으로 뒤집으면 이진수
    const newArr1 = changeBinary(n, arr1);
    const newArr2 = changeBinary(n, arr2);
    const password = [];
    
    // 2. 두 배열을 합침
    for (let i = 0; i < n; i += 1) {
        let sharp = '';
        for (let j = 0; j < n; j += 1) {
            if (newArr1[i][j] === '0' && newArr2[i][j] === '0') sharp += ' ';
            else sharp += '#';
        }
        
        password.push(sharp);
    }
    
    return password;
}