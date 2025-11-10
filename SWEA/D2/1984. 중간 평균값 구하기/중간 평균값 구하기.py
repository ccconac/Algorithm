T = int(input())

for test_case in range(1, T + 1):
    numbers = list(map(int, input().split()))
    max_number = max(numbers)
    min_number = min(numbers)
    
    '''
    # 10개의 수
    # 최대 수와 최소 수를 제외한 나머지의 평균값을 출력
	# 단, 소수점 첫째 자리에서 반올림한 정수를 출력
    '''
    new_numbers = []
    
    for i in range(10):
        if numbers[i] == max_number or numbers[i] == min_number: continue
        else: new_numbers.append(numbers[i])
    
    answer = round(sum(new_numbers) / len(new_numbers))
    print(f'#{test_case} {answer}')
    
    