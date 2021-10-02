# Program = Using Hybrid Algorithm (Insertion + Selection) to sort Acording to given Order
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

#Variables Needed
L = []
W = []

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

            
def selection_sort(L,W):
    
    W.reverse() # Reverse the Second List 
    
    for i in range(len(L)-1):
        
        # We first assume that the first element is the lowest
        min_index = i
        
        # We then use j to loop through the remaining elements
        for j in range(i+1, len(L)):
            
            # Update the min_index if the element at j is lower than it
            if L[j] < L[min_index]:
                min_index = j
            
        # After finding the lowest item of the unsorted regions, swap with the first unsorted item
        L[i], L[min_index] = L[min_index], L[i]
    
    # Now use Insertion Sort for sorting list according to pecific order
    for i in range(0, len(W)):
        key = W[i]
        k = len(L) - 1
        count = 0 
        
        # Compare key with each element of list L then Place that element at the begining of list
        while k >= (0 + count):
            if key == L[k]:
                count = count +1
                j = k
                while j > 0 :
                    L[j],L[j - 1] = L[j-1],L[j]
                    j = j - 1
            else:
                k = k -1
                
                
#L = [5,8,9,3,5,7,1,3,4,9,3,5,1,8,4]
#W = [3,5,7,2]
int_input_function(L)
int_input_function(W)
print("Unsorted Fisrt Array: " + str(L))
print("Order Second ArrayL " + str(W))
selection_sort(L,W)
print("Sorted Array: " + str(L))