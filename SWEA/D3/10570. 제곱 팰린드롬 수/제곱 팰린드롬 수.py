def is_palindrome(s):
    return s == s[::-1]

T = int(input())

for test_case in range(1, T + 1):
    A, B = map(int, input().split())
    answer = 0
    for num in range(A, B + 1):
        root = int(num ** 0.5)
        
        if root * root == num:
            if is_palindrome(str(num)) and is_palindrome(str(root)):
                answer += 1
                
    print(f"#{test_case} {answer}")