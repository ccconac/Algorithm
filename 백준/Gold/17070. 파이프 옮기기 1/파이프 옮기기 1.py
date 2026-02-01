def solution():
    dp[0][0][1] = 1
    for i in range(2, N):
        if house[0][i] == 0:
            dp[0][0][i] = dp[0][0][i - 1]

    for row in range(1, N):
        for col in range(1, N):
            if house[row][col] == 0 and house[row][col - 1] == 0 and house[row - 1][col] == 0:
                dp[1][row][col] = dp[0][row - 1][col - 1] + dp[1][row - 1][col - 1] + dp[2][row - 1][col - 1]
                
            if house[row][col] == 0:
                dp[0][row][col] = dp[0][row][col - 1] + dp[1][row][col - 1]
                dp[2][row][col] = dp[1][row - 1][col] + dp[2][row - 1][col]

    print(sum(dp[i][N - 1][N - 1] for i in range(3)))

N = int(input())
house = [list(map(int, input().split())) for _ in range(N)]
dp = [[[0 for _ in range(N)] for _ in range(N)] for _ in range(3)]
solution()