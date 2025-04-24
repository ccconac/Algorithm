function solution(nums) {
    const phoneketmon = [...new Set(nums)];
    const selectedCount = nums.length / 2;
    const phoneketmonCount = phoneketmon.length;
    
    return phoneketmonCount > selectedCount ? selectedCount : phoneketmonCount;
}