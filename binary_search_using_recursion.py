# Program =  binary search using recursion. 
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

# Necessary Variables
X = []

# Function To take input into List
def input_function(arr):
    size = int(input("Enter the Array Size: "))
    for i in range(0,size):
        temp = input("Enter " + str( i + 1 ) + " number: ")
        try:
            x = int(temp)
            arr.append(x)
        except:
            print("Enter Valid Input")
            
# Funtion to Search a number Binary Recursively
def binary_search(my_list, low, high, elem):
    if high >= low:
        mid = (high + low) // 2
        if my_list[mid] == elem:
            return mid
        elif my_list[mid] > elem:
            return binary_search(my_list, low, mid - 1, elem)
        else:
            return binary_search(my_list, mid + 1, high, elem)
    else:
        return -1
            

input_function(X)
Ser = int(input("Enter the Number you want to Search: "))
res = binary_search(X,0,len(X)-1,Ser)
print(X)
print("target = " + str(Ser))
if res != -1:
    print("Element is present at index", str(res))
else:
    print("Element is not present in array")
