# Program = Multiply two Strings a and b, using partial products and carry
# Muhammad Nouman Butt
# (Github : https://github.com/Nouman0x45) (Linkedin : https://www.linkedin.com/in/nouman0x45/)

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

# Taking 2 inputs in string
fir_num = input("Enter First Integer Number: ")
sec_num = input("Enter Second Integer Number: ")

# Finding there lengths
fir_len = len(fir_num)
sec_len = len(sec_num)

# Variables required 
carry = 0
final = []
key_1 = fir_num
key_2 = sec_num

# For loop for second Number to partially multiple it.
for i in range(sec_len):
    fir_num = key_1
    s_mul = int(sec_num) % 10   # Getting last digit of 2nd Number
    sec_num = int(sec_num) // 10   # Remaining 2nd Number
    fir_arr = []
    
    # For Loop for First Number to Iterate
    for j in range(fir_len):
        f_mul = int(fir_num) % 10  # Getting last digit of 1st Number
        fir_num = int(fir_num) // 10  # Remaining 1st Number
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

print("Multiplication of " + str(key_1) + " and " + str(key_2) + " is " + str(added_num))
