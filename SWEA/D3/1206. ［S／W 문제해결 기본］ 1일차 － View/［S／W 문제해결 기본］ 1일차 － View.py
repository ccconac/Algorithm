T = 10

for test_case in range(1, T + 1):
    N = int(input())
    heights = list(map(int, input().split()))
    answer = 0

    for i in range(2, N - 2):
        max_neighbor = max(heights[i - 2], heights[i - 1], heights[i + 1], heights[i + 2])
        
        if heights[i] > max_neighbor:
            answer += heights[i] - max_neighbor

    print(f"#{test_case} {answer}")