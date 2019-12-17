# It's approaching lunch hour… let's collect orders. Create a new file called lunch_orders.rb to complete this exercise.

# Create a program that collects lunch orders. Prompt:
# Name for order: (enter name)
# {name} wants to order: (enter item)
# Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
# Example: Greg can order a Burger, and then add Fries to his order later.
# After storing data, prompt the user with:
# Add another item to the order? (y/n)
# Repeat steps 1 & 2 if the answer is "y"
# After the user completes adding orders, print out:
# "All orders: {order data}"
# Keep going...
# Rather than printing out a blob of raw lunch order data, print each name's orders on a separate line, formatted as one of the following:

# "Greg ordered a sandwich"
# "Peter ordered a burger & fries"
# "Travis ordered a salad, apple & water"
# You may have to do some hunting in Ruby docs!
require 'pry'

lunch_orders = 
{
  "Name" => "Pete",
  "Items" => []
}

name = 
items = []


print "Name for order: "
lunch_orders["Name"] = gets.chomp

print "#{lunch_orders["Name"]} wants to order: "
lunch_orders["Items"].push(gets.chomp) 

print "Add another item to order? (Y/N): "
answer = gets.chomp


loop do 
  if answer == "Y"
    print "What will it be?: "
    lunch_orders["Items"].push(gets.chomp)
    puts "#{lunch_orders["Name"]} has ordered #{lunch_orders["Items"].to_s}"
    break
  elsif answer == "N"
    puts "#{lunch_orders["Name"]} has ordered #{lunch_orders["Items"].to_s}"
    break
  else 
    puts "I dont understand"
    break
  end
end

binding.pry