require 'pry'

human = {
  hand: []
}

cpu1 = {
  hand: []
}

cpu2 = {
  hand: []
}

cpu3 = {
  hand: []
}

cpu4 = {
  hand: []
}

cpu5 = {
  hand: []
}

cpu6 = {
  hand: []
}

cpu7 = {
  hand: []
}

def card_randomizer(object)
  card_patterns = ['2','3','4','5','6','7','8','9','Jack', 'Queen', 'King', 'Ace']
  card_suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
  playing_deck = []

  card_patterns.each do |card|
    playing_deck.push("#{card} of #{card_suits[0]}")
    playing_deck.push("#{card} of #{card_suits[1]}")
    playing_deck.push("#{card} of #{card_suits[2]}")
    playing_deck.push("#{card} of #{card_suits[3]}")
  end

  playing_deck.shuffle!

  2.times do 
   object[:hand].push("#{playing_deck.delete(playing_deck.sample)}")
  end
end 

binding.pry

print "How many players (2-8) ?"
players = gets.chomp.to_i

if players == 2
  card_randomizer(human)
  card_randomizer(cpu1)
  puts "Your Hand: #{human[:hand][0]}, #{human[:hand][1]} \nCPU1 Hand: #{cpu1[:hand][0]}, #{cpu1[:hand][1]}\n"

end

