def is_palindrome(word):
    return word == word[::-1]

for test_case in range(1, 11):
    T = int(input())
    board = [list(map(str, input().strip())) for _ in range(100)]
    t_board = list(map(list, zip(*board)))

    max_pal = 1
    for size in range(100, 1, -1):
        found = False
        for i in range(100):
            for j in range(101 - size):
                word = board[i][j:j+size]
                t_word = t_board[i][j:j+size]

                if is_palindrome(word) or is_palindrome(t_word):
                    max_pal = size
                    found = True
                    break

            if found:
                break

        if found:
            break

    print(f'#{T} {max_pal}')