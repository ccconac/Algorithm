T = int(input())

for test_case in range(1, T + 1):
    day = input()
    days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

    index = days.index(day)
    answer = 6 - index

    if not answer:
        answer = 7
    
    print(f'#{test_case} {answer}')