require 'pry'
# Daniel

# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.

# He answers 'Sure.' if you ask him a question.
# He answers 'Whatever.' if you tell him something.
# He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
# He says 'Fine. Be that way!' if you address him without actually saying anything.

# Write code in `ruby` so that you can have an interactive conversation with Daniel.
# Make sure you include some testing in order to verify your code.

# print("Ask Daniel a Question: ")
# question = gets().chomp()

answer_sure = "Sure."
answer_whatever = "Whatever"
answer_chill = "Woah, chill out!"
answer_fine = "Fine. Be that way!"

daniel = ""
utf_pattern = Regexp.new("\\p{Lower}".force_encoding("UTF-8"))
  
loop do
  print("Ask Daniel a Question: ")
  question = gets().chomp()
    if question == question.upcase && question.to_s.length > 0
      puts answer_chill
    elsif question.include?('?')
      puts answer_sure
    elsif question.empty?
      puts answer_fine
    elsif question.include?('Bro')
      leet = question.tr('aeio', '4310')
      leet = leet.tr('BCDFGHJKLMNPQRSTVXZWY','bcdfghjklmnpqrstvxzwy')
      puts leet
    else
      puts answer_whatever
    end
end

# .gsub(/[aeio]/, /[4310])

# .gsub()

# if question.include?('Bro')
#   puts "i am not your bro"
# end

# elsif not question.to_s.empty?
    #   puts answer_whatever
  # end

## Extensions

### l33t sP34k

# Daniel, inspired by the 90s, is bringing back "l33t sP34k", and he'll teach you how to do it. Start any sentence with "Bro, ", and he'll translate the rest of it into l33t sP34k for you.

# In brief:

# * Several vowels are always replaced with numbers: a = 4, e = 3, i = 1, o = 0
# * Words that start with a consonant start with lower case

consonant = ('BCDFGHJKLMNPQRSTVXZWY', bcdfghjklmnpqrstvxzwy)

# * Consonants after the first letter alternate upper and lower case, except the alternation starts over with lowercase after a digit (ex: sCh00l)