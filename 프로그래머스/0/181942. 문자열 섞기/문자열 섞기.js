function solution(str1, str2) {
    return [...str1].map((value, index) => value + str2[index]).join('');
}