require 'pry'

class Say

  def initialize(number)
    @number = number 

  end

  def in_english
    string_number = %w{zero one two three four five six seven eight nine ten eleven tweleve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty twenty-one twenty-two twenty-three twenty-four twenty-five twenty-six twenty-seven twenty-eight twenty-nine thirty thirty-one thirty-two thirty-three thirty-four thirty-five thirty-six thirty-seven thirty-eight thirty-nine forty forty-one forty-two forty-three forty-four forty-five forty-six forty-seven forty-eight forty-nine fifty}
    string_number.each_with_index do |string, i|
      if @number == -1
        return "Number must be between 0 and 99, inclusive. (ArgumentError)"
      end 
      if @number == i
      return("#{string}")
      end
    end
  end 

end

binding.pry 

