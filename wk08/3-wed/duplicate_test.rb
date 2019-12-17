require 'minitest/autorun'
require "minitest/reporters" # optional
Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new) # optional

require_relative 'duplicate'

class DupiclateTest < MiniTest::Test

  def test_if_duplicate
    number = Duplicate.new([6,7,4,5,3,5,1]).find_dupicate
    assert_equal 5, number
  end

end