# Program =  recursive function to calculate factorial of the given input
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

# Input the Value
facc = int(input("Write Factorial Number: "))

# Recursive Function to FInd Factorial
def fac(num):
    if(num == 1):
        return num
    else:
        return num*fac(num-1)

# Funtion Calling
fac_value = fac(facc)
print("Factorial of " + str(facc) + " is " + str(fac_value))