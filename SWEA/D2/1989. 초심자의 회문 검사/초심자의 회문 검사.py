T = int(input())

for test_case in range(1, T + 1):
    word = input()
    word_length = len(word) - 1
    # 회문이면 1, 아니라면 0 출력
    
    answer = 0
    if word == word[::-1]: answer =1
        
    print(f'#{test_case} {answer}')
