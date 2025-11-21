T = int(input())

for test_case in range(1, T + 1):
    N, K = map(int, input().split())
    completed = list(map(int, input().split()))
    uncompleted = []

    for person in range(1, N + 1):
        if person not in completed:
            uncompleted.append(person)

    answer = ' '.join(map(str, uncompleted))
    print(f'#{test_case} {answer}')