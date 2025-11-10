T = int(input())

for test_case in range(1, T + 1):
    N, M = list(map(int, input().split()))
    numbers = list(map(int, input().split()))
	# N개의 정수가 들어있는 배열에서 이웃한 M개의 합을 계산
    # M개의 합이 가장 큰 경우, 가장 작은 경우의 차이 출력

    sums = []
    for i in range(N - M + 1):
        sums.append(sum(numbers[i:i+M]))
    
    answer = max(sums) - min(sums)
    print(f'#{test_case} {answer}')