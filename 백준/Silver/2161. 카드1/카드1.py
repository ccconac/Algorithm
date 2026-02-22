N = int(input())

cards = []
answer = []

for i in range(1, N + 1):
    cards.append(i)

while (len(cards) != 0):
    answer.append(cards.pop(0))
    
    if (len(cards) != 0):
        cards.append(cards.pop(0))

for j in answer:
    print(j, end =" ")