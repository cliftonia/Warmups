require 'pry'

square = [4, 1, 16, 1, 10, 35, 22]

def get_squares (array)
  pefect_squares = []
  array.each do |number|
    if (Math.sqrt(number) % 1).zero?
      pefect_squares.push(number)
    end
  end
  return pefect_squares.sort.uniq
end

get_squares(square)

binding.pry

# def get_squares (arr)
# p arr.uniq.sort
# end

# % 1 is a good way of checking for 0