import sys
input = sys.stdin.readline

n = int(input())

stack = []
answer = []
sequence = True

currentNumber = 1
for _ in range(n):
  sequenceNumber = int(input())
  
  while currentNumber <= sequenceNumber:
    stack.append(currentNumber)
    answer.append('+')
    currentNumber += 1
  
  if stack[-1] == sequenceNumber:
    stack.pop()
    answer.append('-')

  else: 
    sequence = False

if sequence:
  for i in answer:
    print(i)
else:
  print('NO')