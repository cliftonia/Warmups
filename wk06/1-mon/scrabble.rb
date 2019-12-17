# Scrabble Score

# Write a program that, given a word, computes the scrabble score for that word.

# ```ruby
# Scrabble.score("cabbage")
# # => 14
# ```

# Your program should be in a file named `scrabble.rb`.

## Letter Values

# ```plain
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# ```

# one = ["A, E, I, O, U, L, N, R, S, T"]
# two = ["D, G"]
# three = ["B, C, M, P"]
# four = ["F, H, V, W, Y"]
# five = ["K"]
# eight = ["J, X"]
# ten = ["Q,Z"]

score = 
{
  "a" => 1,
  "b" => 3,
  "c" => 3,
  "d" => 2,
  "e" => 1,
  "f" => 4,
  "g" => 2,
  "h" => 4,
  "i" => 1,
  "j" => 8,
  "k" => 5,
  "l" => 1,
  "m" => 3,
  "n" => 1,
  "o" => 1,
  "p" => 3,
  "q" => 10, 
  "r" => 1,
  "s" => 1,
  "t" => 1,
  "u" => 1,
  "v" => 4,
  "w" => 4,
  "x" => 8,
  "y" => 4,
  "z" => 10
}


require 'pry'

class Scrabble
  
  def self.score(string)
    score = 
    {
      "a" => 1,
      "b" => 3,
      "c" => 3,
      "d" => 2,
      "e" => 1,
      "f" => 4,
      "g" => 2,
      "h" => 4,
      "i" => 1,
      "j" => 8,
      "k" => 5,
      "l" => 1,
      "m" => 3,
      "n" => 1,
      "o" => 1,
      "p" => 3,
      "q" => 10, 
      "r" => 1,
      "s" => 1,
      "t" => 1,
      "u" => 1,
      "v" => 4,
      "w" => 4,
      "x" => 8,
      "y" => 4,
      "z" => 10
    }









  #   count = 0
  #   one = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]
  #   two = ["D", "G"]
  #   three = ["B", "C", "M", "P"]
  #   four = ["F", "H", "V", "W", "Y"]
  #   five = ["K"]
  #   eight = ["J", "X"]
  #   ten = ["Q","Z"]

  #   one.each do |a|
  #     if string.upcase.include? (a)
  #       count += 1
  #     end
  #   end
  #   two.each do |b|
  #     if string.upcase.include? (b)
  #       count += 2
  #     end
  #   end
  #   three.each do |c|
  #     if string.upcase.include? (c)
  #       count += 3
  #     end
  #   end
  #   four.each do |d|
  #     if string.upcase.include? (d)
  #       count += 4
  #     end
  #   end
  #   five.each do |e|
  #     if string.upcase.include? (e)
  #       count += 5
  #     end
  #   end
  #   eight.each do |f|
  #     if string.upcase.include? (f)
  #       count += 8
  #     end
  #   end
  #   ten.each do |g|
  #     if string.upcase.include? (g)
  #       count += 10
  #     end
  #   end
  #   p count
  # end
end

binding.pry