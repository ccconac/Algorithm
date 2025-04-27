function solution(nums) {
    // nums 1차원 배열, 개수는 항상 짝수, 종류 번호 1 <= type <= 200000
    // 선택할 수 있는 폰켓몬 종류 개수 최댓값 하나만 리턴 
    
    // 최대한 많은 종류에서 N/2마리를 선택
    
    // 1. 배열 중복 제거
    const phoneketmonTypes = [...new Set(nums)];
    // 2. N/2
    const selectedCount = nums.length / 2;
    // 3. 중복 제거한 배열 길이
    const phoneketmonCount = phoneketmonTypes.length;
    
    // 3-1. 중복 제거한 배열의 길이가 N/2보다 작거나 같은 경우 중복 제거한 배열 길이 반환
    // 3-2. 중복 제거한 배열의 길이가 N/2보다 큰 경우 N/2 반환
    return phoneketmonCount <= selectedCount ? phoneketmonCount : selectedCount;
}