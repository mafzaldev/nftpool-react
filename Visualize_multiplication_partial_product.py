# Program = Visualize the multiplication process in the format.
# Muhammad Nouman Butt (2020-CS-110)

# Funtion to convert List into Integer
def list_to_int(arr):
    strings = [str(integer) for integer in arr]
    a_string = "".join(strings)
    an_integer = int(a_string)
    return an_integer

# Function to add Necessory Zero at the begining
def add_zero(num,a):
    if a == 0:
        return num
    for j in range(0,a):
        num = num * 10
    return num

# Function to Print in Process Form
def print_format(fir,sec,arr,leng):
    for i in range(leng-len(str(fir))):
        print("", end = " ")
    print(fir)
    for i in range(leng-len(str(sec))):
        print("", end = " ")
    print(sec)
    for i in range((len(str(fir)) * 2)-3):
        print("-", end = "")
    print("")
    for a in arr:
        for i in range(leng-len(str(a))):
            print("", end = " ")
        print(a)
    for i in range((len(str(sum(arr))) * 2)-4):
        print("-", end = "")
    print("")
    print(sum(arr))
    for i in range((len(str(sum(arr))) * 2)-4):
        print("-", end = "")
    
# Taking 2 inputs
fir_num = int(input("Enter First Integer Number: "))
sec_num = int(input("Enter Second Integer Number: "))

# Finding there lengths
fir_len = len(str(fir_num))
sec_len = len(str(sec_num))

# Variables required 
carry = 0
final = []
key_1 = fir_num
key_2 = sec_num

# For loop for second Number to partially multiple it.
for i in range(sec_len):
    fir_num = key_1
    s_mul = sec_num % 10   # Getting last digit of 2nd Number
    sec_num = sec_num // 10   # Remaining 2nd Number
    fir_arr = []
    
    # For Loop for First Number to Iterate
    for j in range(fir_len):
        f_mul = fir_num % 10  # Getting last digit of 1st Number
        fir_num = fir_num // 10  # Remaining 1st Number
        num = ( f_mul * s_mul ) + carry
        if num > 10:
            carry = num // 10
            num = num % 10
            fir_arr.append(num)
        else:
            carry = 0
            fir_arr.append(num)
            
    # If any carry left after inner for iteration then add it to list and decalre it 0 again        
    if carry != 0:
        fir_arr.append(carry)
        carry = 0          
    fir_arr.reverse()        # reversing the list to get the right number
    a = list_to_int(fir_arr) # changing the list to int using Function
    b = add_zero(a,i)        # Adding necessary Zeros at the begining of number
    final.append(b)
added_num = sum(final)   # finding sum of all numbers

print_format(key_1,key_2,final,len(str(added_num)))
