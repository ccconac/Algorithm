function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, curr) => acc + Number(curr), 0);
}