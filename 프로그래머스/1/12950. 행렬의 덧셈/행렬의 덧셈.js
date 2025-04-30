function solution(arr1, arr2) {
    return arr1.map((arr, index1) => arr.map((number, index2) => number + arr2[index1][index2]));
}