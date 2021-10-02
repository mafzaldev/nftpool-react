
# Program = Bubble Sort to Bring Zeros at the End of Array.
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

def bubble_sort(L):

    # This loop will iterate to find Zero in Array
    for i in range(len(L)):
        if L[i] == 0:
            j = i

            # This loop will bring 0's To end of Array
            while j < len(L)-1:
                # Swap
                L[j], L[j+1] = L[j+1], L[j]
                j = j+1
                
# Function calling
int_input_function(L) 
#L = [6,0,8,2,3,0,4,0,1]
print(L)
bubble_sort(L)
print(L)