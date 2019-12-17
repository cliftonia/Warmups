# Quiz - Decode this message!

# Write a program to decode this message:

# **FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK
# EXW RQFH.**

# This is a form of cryptography known as the Caesar Cipher. It has a **shift parameter** of **3**.

# The alphabet is normally:

# ABCDEFGHIJKLMNOPQRSTUVWXYZ

# The alphabet with the shift parameter of 3 is now as follows:

# DEFGHIJKLMNOPQRSTUVWXYZABC

require 'pry'

secret_message = 'FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK
EXW RQFH.'

def caesar_cipher (message)
  p message.tr('DEFGHIJKLMNOPQRSTUVWXYZABC','ABCDEFGHIJKLMNOPQRSTUVWXYZ')
end

caesar_cipher(secret_message)

# ---
### Extension:


message = 'TWO SYMBOLS KISSING EACH OTHER'

def encoder (message)
  p message.tr('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'DEFGHIJKLMNOPQRSTUVWXYZABC')
end

message_to_code = "Lets Live in A mansion High up on the hill"

def encoder_v2 (message,num)
  ascii = message.chars.map(&:ord)
  ascii = message.chars.map { |c| c.ord }
  shifted = ascii.map { |c| c + num }
  shifted.map { |c| c.chr }.join
end

coded = encoder_v2(message_to_code,3)

def decoder_v2 (secmes,num)
ascii = secmes.chars.map(&:ord)
ascii = secmes.chars.map { |c| c.ord }
shifted = ascii.map { |c| c - num }
shifted.map { |c| c.chr }.join
end

peach = "lets go surfing"

ascii = peach.chars.map(&:ord)
ascii = peach.chars.map { |c| c.ord }
shifted = ascii.map { |c| c + 3 }
shifted.map { |c| c.chr }.join

uncoded = decoder_v2(coded,3)


print "What would you like me to code for you today: "
input = gets.chomp
print "how many numbers do you want to shift it by: "
input_num = gets.chomp.
input_num_i = input_num.to_i

input_coded = encoder_v2(input,input_num_i)
p "you message now displays #{input_coded}"

# print "say yes if if you would like me to decode for it you: "
# input2 = gets.chomp

# if input2 == "yes"
#   puts caesar_cipher(input)
# else
#   puts "goodbye"
# end

### Extension 2:

# Write the program to encode it with any shift parameter.

# Send each other secret messages.

binding.pry


alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
alphabet.chars
alphabet.index

alphabet_array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
alphabet_array =  alphabet_array.chars

jumbled_array = 'DEFGHIJKLMNOPQRSTUVWXYZABC'
jumbled_array =  jumbled_array.chars

f_alpha = alphabet_array.index('F')

