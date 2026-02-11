import sys

input = sys.stdin.readline

M = int(input())
S = set()

for _ in range(M):
    line = input().split()
    cmd = line[0]

    if cmd == 'all':
        S = set(range(1, 21)) 
        continue
    elif cmd == 'empty':
        S = set()
        continue

    x = int(line[1])

    if cmd == 'add':
        S.add(x)
    elif cmd == 'remove':
        S.discard(x)
    elif cmd == 'check':
        print(1 if x in S else 0)
        
    elif cmd == 'toggle':
        if x in S:
            S.discard(x)
        else:
            S.add(x)