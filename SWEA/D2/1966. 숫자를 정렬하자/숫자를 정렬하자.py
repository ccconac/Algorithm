T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    numbers = list(map(int, input().split()))
    
    for i in range(N):
        for j in range(0, N - i - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
    
    answer = ' '.join(map(str, numbers))
    
    print(f'#{test_case} {answer}')