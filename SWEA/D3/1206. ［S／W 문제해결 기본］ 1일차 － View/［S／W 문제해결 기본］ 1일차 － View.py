T = 10

for test_case in range(1, T + 1):
    N = int(input())
    heights = list(map(int, input().split()))
    views = [0] * N

    # 건물이 0인 곳은 제외
    for i in range(2, N - 2):
        temp = []

        # 좌우 비교
        for j in range(1, 3):
            left_diff = heights[i] - heights[i - j]
            right_diff = heights[i] - heights[i + j]

            # 하나라도 0 이하면 조망권 확보 불가
            if left_diff <= 0 or right_diff <= 0:
                if temp:
                    temp = []
                else:
                    break

            # 모두 양수일 경우 temp에 추가
            else:
                temp.append(left_diff)
                temp.append(right_diff)

        # temp의 최솟값이 해당 건물의 조망권
        if temp:
            views[i] = min(temp)

    answer = sum(views)
    print(f'#{test_case} {answer}')