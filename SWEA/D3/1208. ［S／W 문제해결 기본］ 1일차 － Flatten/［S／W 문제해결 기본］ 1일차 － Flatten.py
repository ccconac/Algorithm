from collections import deque

def boxes_exchange():
    global N, max_height, min_height

    while N > 0:
        max_height = max(boxes)
        min_height = min(boxes)

        if max_height - min_height <= 1:
            break

        # 가장 높이 있는 상자를 가장 낮은 곳으로 옮김
        max_index = boxes.index(max_height)
        min_index = boxes.index(min_height)

        boxes[max_index] -= 1
        boxes[min_index] += 1

        N -= 1

    return max(boxes) - min(boxes)


for test_case in range(1, 11):
    N = int(input())
    boxes = list(map(int, input().split()))

    max_height, min_height = 0, 0
    answer = boxes_exchange()

    print(f'#{test_case} {answer}')