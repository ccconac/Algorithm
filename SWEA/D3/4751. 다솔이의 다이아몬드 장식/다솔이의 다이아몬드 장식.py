T = int(input())

for test_case in range(1, T + 1):
    string = input()
    length = len(string)

    print("..#." * length + ".")
    print(".#" * length * 2 + ".")

    for char in string:
        print("#." + char + ".", end="")

    print("#")
    print(".#" * length * 2 + ".")
    print("..#." * length + ".")