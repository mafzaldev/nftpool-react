# Program = Separating Positive and Negative number using mergeSort
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

# Necessary Variable
X = []

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

# This Function will divide the Array into two arrays depending upon its indexes
# and will call mergesort recursively again on the divided Array
# until starting and ending point becomes the same e.g a = b = 1.           
def mergeSort(X,a,b):
    if a >= b:
        return 
    
    m = (a+b)//2        # finding m = Mid-Point for dividing the Array
    mergeSort(X,a,m)    # Sending First Half of Array into MergeSort
    mergeSort(X,m+1,b)  # Sending Second Half of Array into MergeSort
    merge(X,a,m,b)
        
# This Function will Merge the 2 Arrays
# and separate the positive and negative Elements in it.     
def merge(X,a,m,b):
    
    left_copy = X[a:m + 1]   # Copy first half into one Array
    right_copy = X[m+1:b+1]  # Copy Second half into one Array
    
    # Necessory Variables
    left_ind = 0
    right_ind = 0
    sort_ind = a
    
     # This Loop will Copy the Element from boths arrays and Separate Them.
    while left_ind < len(left_copy) and right_ind < len(right_copy):
        if left_copy[left_ind] <= right_copy[right_ind] and left_copy[left_ind] < 0:
            X[sort_ind] = left_copy[left_ind]
            left_ind = left_ind + 1
        # Opposite from above
        else:
            X[sort_ind] = right_copy[right_ind]
            right_ind = right_ind + 1

        # Regardless of where we got our element from
        # move forward in the sorted part
        sort_ind = sort_ind + 1
        
    # We ran out of elements either in left_copy or right_copy
    # so we will go through the remaining elements and add them
    while left_ind < len(left_copy):
        X[sort_ind] = left_copy[left_ind]
        left_ind = left_ind + 1
        sort_ind = sort_ind + 1

    while right_ind < len(right_copy):
        X[sort_ind] = right_copy[right_ind]
        right_ind = right_ind + 1
        sort_ind = sort_ind + 1

input_function(X)
mergeSort(X,0,len(X)-1)
print(X)