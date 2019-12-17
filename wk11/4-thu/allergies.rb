# require 'pry'

class Allergies

  def initialize(score)
    @score = score
  end

  def allergic_to? string 
    # returns whether the allergen is positive or negative for their score
    # returns whether the allergen is part of their list of allergies
    list.include?(string)

  end 

  def list
    allergies_array = []

    allergies = {
      'eggs' => 1,
      'peanuts' => 2,
      'shellfish' => 4,
      'strawberries' => 8,
      'tomatoes' => 16,
      'chocolate' => 32,
      'pollen' => 64,
      'cats' => 128
    }
    
    allergies = Hash[allergies.to_a.reverse]

    score = @score

    allergies.each do |k, v|
      if score >= v
        score -= v
        allergies_array.push(k)
      end 
    end 

    return allergies_array
  end

end

allergies = Allergies.new(34)
allergies.allergic_to?('chocolate')
allergies.allergic_to?('cats')
allergies.list


# binding.pry

# Allergies

# An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

# The list of items (and their value) that were tested are:

# * eggs (1)
# * peanuts (2)
# * shellfish (4)
# * strawberries (8)
# * tomatoes (16)
# * chocolate (32)
# * pollen (64)
# * cats (128)

# So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

# Write a program that, given a person's score can tell them

# a) whether or not they're allergic to a given item, and
# b) the full list of allergies.

# **Remember to write tests to see if your solution works**

# ```ruby
# allergies = Allergies.new(34)
# allergies.allergic_to?('chocolate')
# => true
# allergies.allergic_to?('cats')
# => false
# allergies.list
# => ['peanuts', 'chocolate']
# ```