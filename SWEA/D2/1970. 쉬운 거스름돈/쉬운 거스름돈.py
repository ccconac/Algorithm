T = int(input())

for test_case in range(1, T + 1):
    money = int(input())
    bills = {50000: 0, 10000: 0, 5000: 0, 1000: 0, 500: 0, 100: 0, 50: 0, 10: 0}

    for bill in bills:
        bills[bill] += money // bill
        money %= bill

    print(f'#{test_case}')
    for count in bills.values():
        print(count, end=' ')
    print()