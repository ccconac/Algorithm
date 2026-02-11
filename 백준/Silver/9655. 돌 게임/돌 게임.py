N = int(input())

# 게임 상근이 먼저
# 1개 또는 3개
# 상근: SK 창영: CY
turn = 0

while N > 0:
    if N >= 3:
        N -= 3
    else:
        N -= 1

    turn = 1 - turn

if turn == 1:
    print('SK')
else:
    print('CY')