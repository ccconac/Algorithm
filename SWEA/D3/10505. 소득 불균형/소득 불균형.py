T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    persons = list(map(int, input().split()))
    
    avg = sum(persons) / len(persons)
    answer = 0
    
    # 평균 이하의 소득을 가진 사람의 수
    for person in persons:
        if avg >= person:
            answer += 1
            
    print(f'#{test_case} {answer}')