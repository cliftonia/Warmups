require "pry"

class Dice
  # def initialize
    
  # end
  
  def self.roll(num)
    ar = [[]]
    num.times {
      ar[0].push(rand(6))
    }
    return ar
  end

  def self.total 
    # return ar[0].sum
    return ar.push(ar[0].sum)
  end

  # $aa = [[]]

  # def self.roll(num)
  #   num.times {
  #     $aa[0].push(rand(6))
  #   }
  # end

  # def self.total 
  #   # return ar[0].sum
  #   return .push(ar[0].sum)
  # end

  # def self.sum  {

  # }

end

# arr.push(arr[0].sum)

binding.pry 


# arr = [2,4,6,7]

# arr. each do |a|
#   return a + a
# end