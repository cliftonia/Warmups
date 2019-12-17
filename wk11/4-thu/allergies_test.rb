require 'minitest/autorun'
require "minitest/reporters" # optional
Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new) # optional

require_relative 'allergies'

class AllergiesTest < Minitest::Test
  def test_chocoalte_is_true
    allergies = Allergies.new(34)
    assert_equal true, allergies.allergic_to?('chocolate')
  end

  def test_cats_is_false
    allergies = Allergies.new(34)
    assert_equal false, allergies.allergic_to?('cats')
  end

end