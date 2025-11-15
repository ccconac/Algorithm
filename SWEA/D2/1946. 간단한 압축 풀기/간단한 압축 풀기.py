T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    answer = ''

    for _ in range(N):
        Ci, Ki = input().split()
        answer += Ci * int(Ki)

    # 10개씩 끊기
    length = len(answer)
    
    print(f'#{test_case}')
    for i in range(0, length, 10):
        print(answer[i:i+10])