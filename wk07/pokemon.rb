require "pry"

pokemon = [
{
  "name" => "Pikachu",
  "attack" => 40
},
{
  "name" => "Rattata",
  "attack" => 20
},
{
  "name" => "Pidgeot",
  "attack" => 60
},
{
  "name" => "Alakazam",
  "attack" => 80
},
{
  "name" => "Butterfree",
  "attack" => 30
},
{
  "name" => "Gengar",
  "attack" => 70
},
{
  "name" => "Moltres",
  "attack" => 100
},
{
  "name" => "Vulpix",
  "attack" => 40
},
{
  "name" => "Blastoise",
  "attack" => 80
},
{
  "name" => "Hitmonchan",
  "attack" => 50
}]

pokemon.shuffle!
pokemon.reverse!

alfred = []
peter = []

left_over_p1 = []
left_over_p2 = []

psplit = pokemon.each_slice(3).to_a

alfred.push(psplit[0][0])
alfred.push(psplit[0][1])
alfred.push(psplit[0][2])

peter.push(psplit[1][0])
peter.push(psplit[1][1])
peter.push(psplit[1][2])

left_over_p1.push(psplit[2][0])
left_over_p1.push(psplit[2][1])
left_over_p1.push(psplit[2][2])

left_over_p2.push(psplit[3][0])

if rand(1..10) >= 7
  peter.push(left_over_p2[0])
  alfred.push(left_over_p1[0])
  alfred.push(left_over_p1[1])
  alfred.push(left_over_p1[2])
elsif rand(1..10) <= 7
  alfred.push(left_over_p2[0])
  peter.push(left_over_p1[0])
  peter.push(left_over_p1[1])
  peter.push(left_over_p1[2])
end

# def cardswinner
#   if rand(1..10) > 7
#     peter.push(left_over_p2[0])
#     peter.push(left_over_p2[1])
#     peter.push(left_over_p2[2])
#   else
#     alfred.push(left_over_p1[0])
#   end
#   p peter
#   p alfred
# end

def card_winner(deck, p1, p2)
  p1 = []
  p2 = []
  left_over_p1 = []
  left_over_p2 = []

  psplit = deck.each_slice(3).to_a


end

binding.pry
