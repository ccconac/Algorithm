T = int(input())
base64_table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

for test_case in range(1, T + 1):
    strings = input()

    # 문제에서 인코딩을 설명 중 (반대로 하면 디코딩)
    # 디코딩: 표에서 값 찾음 -> 2진수로 변환 (6비트) -> 8비트씩 자름 -> 10진수 -> 아스키 코드

    binary = ''
    for c in strings:
        number = bin(base64_table.index(c))[2:].zfill(6)
        binary += number

    length = len(binary)
    skip = length - (length % 8) # 남는 자리는 버리기 위함

    answer = ''
    for i in range(0, skip, 8):
        digit = int(binary[i:i+8], 2)
        answer += chr(digit)

    print(f'#{test_case} {answer}')