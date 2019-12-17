# I need to create a class for the robots
# I need to assign them a name, a mac address
# I need to create a name method which says there name 
# I also need to create a reset method

# When robots come off the factory floor, they have no name.

# The first time you boot them up, a random name is generated, such as RX837 or BC811, always 2 random letters followed by 3 random numbers.

# ("A".."Z").to_a.sample 

require 'pry'


class Robot
  
  

  def initialize

    characters = %w(A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)
    
    numbers = %w(1 2 3 4 5 6 7 8 9 0)

    @start = Time.now
    
    @name = "#{characters.sample}#{characters.sample}#{numbers.sample}#{numbers.sample}#{numbers.sample}"

    @mac_address = "#{numbers.sample}#{numbers.sample}:#{numbers.sample}#{numbers.sample}:#{numbers.sample}#{numbers.sample}:#{numbers.sample}#{numbers.sample}:#{numbers.sample}#{numbers.sample}:#{numbers.sample}#{numbers.sample}"

    @count = 0

  end

  def name 
    @count += 1
    @name

  end 

  def reset
    characters = %w(A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)
    numbers = %w(1 2 3 4 5 6 7 8 9 0)
    
    @count += 1
    
    @name = "#{characters.sample}#{characters.sample}#{numbers.sample}#{numbers.sample}#{numbers.sample}"
  end 

  def instruction_count
    @count
  end

  def timers
    finish = Time.now
    diff = finish - @start
    "#{diff.round} seconds since last boot"
  end 
  
  if puts "Robot 1: " == "Robot 1: "
    robot1 = Robot.new
    puts robot1.name
    puts robot1.name
    puts robot1.name
  end 
end

binding.pry 