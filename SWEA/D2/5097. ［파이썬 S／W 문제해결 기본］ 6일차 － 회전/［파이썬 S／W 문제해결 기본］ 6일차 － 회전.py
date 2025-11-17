from collections import deque

T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    numbers = list(map(int, input().split()))

    queue = deque(numbers)

    # 1. 맨 앞의 숫자를 맨 뒤로 보내는 작업 M번 수행
    # 2. 맨 앞에 있는 숫자 출력
    for _ in range(M):
        queue.append(queue.popleft())

    answer = queue[0]
    print(f'#{test_case} {answer}')