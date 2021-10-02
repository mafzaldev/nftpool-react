# Program =  Fibonacci Series using recursion up to the given input. 
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

# Function To find Fibonacci Numbers Recursively
def FibRecursion(n):  
    if n <= 1:  
        return n  
    else:  
        return(FibRecursion(n-1) + FibRecursion(n-2)) 

Inp = int(input("Enter The Number: "))
print("Fibonacci sequence:")  
for i in range(Inp):  
    if(FibRecursion(i) <= Inp):
        print(FibRecursion(i), end = ",")