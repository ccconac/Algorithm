from collections import deque

def cycle():
    queue = deque(data)
    
    while True:
        for i in range(1, 6):
            current = queue.popleft()

            if current - i < 0 or current - i == 0:
                queue.append(0)
                return queue

            queue.append(current - i)

for test_case in range(1, 11):
    N = int(input())
    data = list(map(int, input().split()))

    answer = ' '.join(map(str, cycle()))

    print(f'#{test_case} {answer}')