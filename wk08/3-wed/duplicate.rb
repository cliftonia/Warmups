require 'pry'

class Dupiclate
  def initialize(arr)
    @numbers = arr
  end

  def find_dupicate(arr)
    dup = arr.select{ |e| arr.count(e) > 1 }.uniq
    dup.join("").to_i
  end
end

binding.pry