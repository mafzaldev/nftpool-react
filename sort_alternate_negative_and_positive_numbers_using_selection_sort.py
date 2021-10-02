# Program = Rearrange an array such that it contains alternate positive and negative numbers using selection sort.
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

# this Function will sort the list in alternative positive and negative int
def selection_sort(L):
    
    p_ind = 0
    n_ind = 0
    for i in range(len(L)-1):

        # We first assume that the first element is the lowest
        min_index = i
        
        # We then use j to loop through the remaining elements
        for j in range(i+1, len(L)-1):
            
            # Update the min_index if the element at j is lower than it
            if L[j] < L[min_index]:
                min_index = j
                
        # Finding the first positive int in the list 
        if L[min_index] < 0:
            p_ind = p_ind +1

        # After finding the lowest item of the unsorted regions, swap with the first unsorted item
        L[i], L[min_index] = L[min_index], L[i]
    
    # Negtive index will increase by 2 and Positive will increse by 1
    while p_ind < len(L) and p_ind > n_ind: 
        L[p_ind],L[n_ind] = L[n_ind] , L[p_ind]
        n_ind = n_ind + 2
        p_ind = p_ind + 1
        
# Function calling
int_input_function(L) 
print(L)
selection_sort(L)
print(L)