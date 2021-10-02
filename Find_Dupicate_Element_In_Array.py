# Program = find a duplicate element by input in Array.
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

# Funtion to find Duplicate in a Array
def find_duplicate(number):
    count = 0
    for x in number:
        for k in number:
            if x == k:
                count = count + 1
        if count > 2:
            return x;
# List Variable
nums = []

# For loop to take Inputs
for num in range(0,5):
    temp = input("Enter " + str(num+1) + " number: ")
    try:
        x = int(temp)
        nums.append(x) 
    except:
        print("Enter Valid Input")
        
hi = find_duplicate(nums)
print("The duplicate element is " + str(hi))