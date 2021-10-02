# Program = Merge two arrays in sorted manner. 
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

# Necessary Lists
Y = []
X = []
final_arr = []
ara = []

# Funtion To take Inputs for all list
def input_function(arr):
    size = int(input("Enter the Array Size: "))
    for i in range(0,size):
        temp = input("Enter " + str( i + 1 ) + " number: ")
        try:
            x = int(temp)
            arr.append(x)
        except:
            print("Enter Valid Input")

input_function(X)
input_function(Y)

# Getting both list numbers in one list
for num in range(0,len(X)):
    if X[num] != 0:
        final_arr.append(X[num])
for num in Y:
    if num != 0:
        final_arr.append(num)

# Sorting Final list
for num in range(0,len(final_arr)):
    for k in range(num+1,len(final_arr)):
        if(final_arr[num] > final_arr[k]):
            temp = final_arr[num]
            final_arr[num] = final_arr[k]
            final_arr[k] = temp
print(final_arr)