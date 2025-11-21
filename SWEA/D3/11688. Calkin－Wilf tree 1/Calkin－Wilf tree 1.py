T = int(input())

for test_case in range(1, T + 1):
    direction = input()
    a = 1
    b = 1

    for dir in direction:
        if dir == 'L':
            b += a

        if dir == 'R':
            a += b

    print(f'#{test_case} {a} {b}')