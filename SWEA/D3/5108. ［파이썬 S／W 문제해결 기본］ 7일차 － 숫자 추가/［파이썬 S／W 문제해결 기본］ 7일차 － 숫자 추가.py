T = int(input())

for test_case in range(1, T + 1):
    N, M, L = map(int, input().split()) # 수열의 길이, 추가 횟수, 출력할 인덱스 번호
    numbers = list(map(int, input().split()))

    for i in range(M):
        index, number = map(int, input().split())
        numbers.insert(index, number)

    print(f'#{test_case} {numbers[L]}')