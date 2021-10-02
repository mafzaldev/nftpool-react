# Program = Split the numbers into digits and print them on single line.
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

inp = int(input("Enter Number: "))

# Run this Loops to the len og Number
for i in range(len(str(inp))):

    # Get the last digit
    digit = inp % 10 
    print(digit)

    # emit the last digit printed from number
    inp = inp // 10  