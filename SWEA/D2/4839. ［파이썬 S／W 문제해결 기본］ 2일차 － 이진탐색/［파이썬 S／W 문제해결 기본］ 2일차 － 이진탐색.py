T = int(input())

def binary_search(n, target):
    left, right = 1, n
    count = 0

    if target == 1 or target == n:
        return 0
    elif target < left or target > right:
        return 0
    else:
        while left <= right:
            center = (left + right) // 2

            if center == target:
                break
            elif center > target:
                right = center
                count += 1
            elif center < target:
                left = center
                count += 1

    return count

for test_case in range(1, T + 1):
    P, A, B = map(int, input().split())

    a_count = binary_search(P, A)
    b_count = binary_search(P, B)

    answer = 'A'

    if a_count > b_count:
        answer = 'B'
    elif a_count == b_count:
        answer = 0

    print(f'#{test_case} {answer}')