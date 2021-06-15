require "test_helper"

class LinkTest < ActiveSupport::TestCase
  def setup
    Link.delete_all

    @link = Link.new(original_url: "https://atoztechstore.herokuapp.com/",
                   shortened_url: "http://localhost:3000/3ib8b006",
                   slug: "3ib8b006")
  end

  test "value of original link assigned" do
    assert_equal "https://atoztechstore.herokuapp.com/", @link.original_url
  end

  test "instance of link" do
    assert_instance_of Link, @link
  end

  test "error raised" do
    assert_raises ActiveRecord::RecordNotFound do
      Link.find(SecureRandom.uuid)
    end
  end

  test "link should not be valid without original link" do
    @link.original_url = ""
    assert_not @link.valid?, "original link is empty"
  end

  test "link should not be valid without shortened link" do
    @link.shortened_url = ""
    assert_not @link.valid?, "shortened link is empty"
  end

  test "original links should be valid" do
    original_urls = %w[
    https://www.google.com
    https://www.amazon.com
    ]

    original_urls.each do |link|
      @link.original_url = link
      assert @link.valid?
    end
  end

  test "shortened links should be valid" do
    shortened_urls = %w[http://localhost:3000/3fb8b006 http://localhost:3000/884cbb02]

    shortened_urls.each do |link|
      @link.shortened_url = link
      assert @link.valid?
    end
  end

end