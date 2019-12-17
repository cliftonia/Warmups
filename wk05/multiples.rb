# Write a method called even_multiples that takes a list_of_numbers and returns only numbers that are even AND multiples of 5.

# For example the list_of_numbers could be [14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5].
require "pry"

list_of_numbers = [14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5]
arr_numbers = [14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5]
test_arr = [10,20,30,40]

def even_m(arr)
  arr.each do |a|
    if a % 5 == 0 && a.even?
       a
    end
  end
end


# numbers = []
# even_multiples_result = []

# list_of_numbers.each do |num|
#   if num % 5 == 0
#     multiples.push(num)
#   end
# end

# test.each do |num|
#   if num % 5 == 0
#     multiples.push(num)
#   end
# end

# multiples.each do |num|
#   if num.even?
#     numbers.push(num)
#   end
# end

# def even_multiples(arr)
#   multiples = []
#   even_multiples_result = []
#   arr.each do |a|
#     if a % 5 == 0
#       multiples.push(a)
#     end
#   end
#   multiples.each do |b|
#     if b.even?
#       even_multiples_result.push(b)
#       return even_multiples_result
#     end
#   end
# end 
    
binding.pry


# list_of_numbers.each do |num|
#   if num.even? && num % 5 == 0
#     p num
#   end
# end