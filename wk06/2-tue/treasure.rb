require 'pry'

map1 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","X","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"]
  ]

map2 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","X","A","A","A"]
  ]

map3 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["A","A","A","V","A"],
  ["v","v","V","v","X"],
  ["A","V","A","A","A"]
  ]

map4 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["A","A","A","V","A"],
  ["v","v","V","v","A"],
  ["X","V","A","A","A"]
  ]

holyGrailMap = [
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","G","v","S","S"],
  ["v","v","H","v","S","S"],
  ["v","v","V","v","S","S"],
  ["A","V","A","A","A","S"]
  ]


def treasure(arr)
  arr_location = []
  arr.each_with_index do |a, index|
    if a.index("X") != nil
    arr_location.push(index)
    arr_location.push(a.index("X"))
    end
  end
  return arr_location
end 

def treasure_finder(arr, char)
  arr_location = []
  arr.each_with_index do |a, index|
    if a.index(char) != nil
    arr_location.push(index)
    arr_location.push(a.index(char))
    end
  end
  return arr_location
end

binding.pry

### Bonus:

# Modify your function to accept maps of any size, and to accept a second argument for the key to look for. It should also handle non-unique 'key' values gracefully.


# //sample outputs:

# treasureFinder(holyGrailMap, "G") // should return [4, 2];
# treasureFinder(holyGrailMap, "H") // should return [5, 2];
# treasureFinder(holyGrailMap, "H") // should return [5, 2];

# treasureFinder(holyGrailMap, "V") // should return 'that doesnt belong in a museum!';

def treasureFinder(map, char)

end