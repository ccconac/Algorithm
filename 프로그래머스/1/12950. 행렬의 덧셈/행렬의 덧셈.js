function solution(arr1, arr2) {
    const answer = arr1.map((arr, index1) => {
        return arr.map((number, index2) => {
            return number + arr2[index1][index2];
        })
    })
    
    return answer;
}