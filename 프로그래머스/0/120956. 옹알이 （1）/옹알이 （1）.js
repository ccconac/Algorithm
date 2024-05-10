function solution(babbling) {
  const REGEX = /^(aya|ye|woo|ma)+$/;
  let answer = 0;

  babbling.forEach(word => {
    if (REGEX.test(word)) answer += 1;  
  })

  return answer;
}