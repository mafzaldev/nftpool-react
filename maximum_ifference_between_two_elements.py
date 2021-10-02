# Program =  maximum difference between two elements.
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

# Necessary Variable
diff_Arr = []

# Function to take Input 
def input_function(arr):
    size = int(input("Enter the Array Size: "))
    for i in range(0,size):
        temp = input("Enter " + str( i + 1 ) + " number: ")
        try:
            x = int(temp)
            arr.append(x)
        except:
            print("Enter Valid Input")

# Function to find Min and Max Variable
def biggest_diff(arr):
    min = arr[0]
    max = arr[(len(arr)-1)]
    
    for i in arr:
        if i < min:
            min = i
        if i > max:
            max = i
    return min,max

input_function(diff_Arr)      
min,max = biggest_diff(diff_Arr)
dif = max - min
print("The Maximum difference is " + str(dif))
print("The pair is (" +str(min) + "," + str(max)+")")
