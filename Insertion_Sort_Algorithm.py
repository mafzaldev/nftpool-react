# Program = Insertion Sort Algorithm.
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

# Necessary Variable
L = []

# input Function to take Integer Input
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

def insertion_sort(A):
    
    for i in range(1, len(A)):
        key = A[i]
        j = i - 1
        
        # Compare key with each element on the left of it until an element smaller than it is found
        # For descending order, change key<array[j] to key>array[j].        
        while j >= 0 and key < A[j]:
            A[j + 1] = A[j]
            j = j - 1
        
        # Place key at after the element just smaller than it.
        A[j + 1] = key
        
int_input_function(L) 
#L = [5,7,-8,9,10,4,-7,0,-12,1,6,2,3,-4,-15,12]
print("Unsorted Array is: " + str(L))
insertion_sort(L)
print("Sorted Array is: " + str(L))