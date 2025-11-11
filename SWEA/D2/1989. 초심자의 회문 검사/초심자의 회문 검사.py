T = int(input())

for test_case in range(1, T + 1):
    word = input()
    word_length = len(word) - 1
    # 회문이면 1, 아니라면 0 출력
    
    reverse_word = ''
    answer = 0
    
    for i in range(word_length, -1, -1):
        reverse_word += word[i]
    
    if word == reverse_word: answer = 1
    else: anwer = 0
        
    print(f'#{test_case} {answer}')