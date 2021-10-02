# Program = Merge Sort Algorithm
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

# Necessary Variable
X = []

# Function to take Input 
def int_input_function(arr):
    size = int(input("Enter the Array Size: "))
    j = 0
    while j < size:
        temp = input("Enter " + str( j + 1 ) + " number: ")
        try:
            x = int(temp)
            arr.append(x)
            j = j+1
        except:
            print("In-Valid Input")
            
# This Function will divide the Array into two arrays depending upon its indexes
# and will call mergesort recursively again on the divided Array
# until starting and ending point becomes the same e.g a = b = 1.        
def mergeSort(X,a,b):
    if a >= b:
        return 
    
    m = (a+b)//2       # finding m = Mid-Point for dividing the Array
    mergeSort(X,a,m)   # Sending first half of array into Mergesort
    mergeSort(X,m+1,b) # Sending Second Half of Array into MergeSort
    merge(X,a,m,b)
        
# This Function will Merge the 2 Unsorted Arrays 
def merge(X,a,m,b):
    
    left_copy = X[a:m + 1]  # Copy first half into one Array
    right_copy = X[m+1:b+1] # Copy Second Half into Second Array
    
    # Necessory Variables
    left_ind = 0
    right_ind = 0
    sort_ind = a
    
    # This Loop will Copy the Element from Both Left and Right Array in a sorted Manner
    while left_ind < len(left_copy) and right_ind < len(right_copy):
        if left_copy[left_ind] <= right_copy[right_ind]:
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

int_input_function(X)
mergeSort(X,0,len(X)-1)
print(X)