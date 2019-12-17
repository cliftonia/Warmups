require 'pry'

# go through each block

# if block contains letter, then remove block and go to next letter, otherwise let user know word cannot be made 

# if all letters are found, user can make word

def can_make_word(string)
  blocks = [
    ['B','O'],
    ['X','K'],
    ['D','Q'],
    ['C','P'],
    ['N','A'],
    ['G','T'],
    ['R','E'],
    ['T','G'],
    ['Q','D'],
    ['F','S'],
    ['J','W'],
    ['H','U'],
    ['V','I'],
    ['A','N'],
    ['E','R'],
    ['F','S'],
    ['L','Y'],
    ['P','C'],
    ['Z','M']
  ]

  letters = string.upcase.chars

  letters.each do |letter|
    blocks.each_with_index do |block, i|
      if block.include?(letter)
        blocks.delete_at(i)
        binding.pry
        return true
      # else  
      #   return false 
      end 
    end
  end 

end 

binding.pry
