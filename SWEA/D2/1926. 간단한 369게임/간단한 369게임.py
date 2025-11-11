N = int(input())
arr = [0] * (N + 1)

for i in range(1, N + 1):
    temp = str(i)
    for j in range(0, len(temp)):
        if int(temp[j]) != 1 and int(temp[j]) != 0 and int(temp[j]) % 3 == 0:
            arr[int(temp)] += 1
    if arr[i]: print('-' * arr[i], end=' ')
    else: print(i, end=' ')
        