import sys
input = sys.stdin.readline

N = int(input())

towerHeights = list(map(int, input().split()))
stack = []
answer = [0] * N

for i in range(N):
  while stack:
    if stack[-1][1] > towerHeights[i]:
      answer[i] = stack[-1][0]
      break
    else:
      stack.pop()
  stack.append([i + 1, towerHeights[i]])

print(*answer)