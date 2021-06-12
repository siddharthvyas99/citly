require "test_helper"

class LinksControllerTest < ActionDispatch::IntegrationTest

  test "should get index" do
    get '/links'
    assert_response :success
  end

  test "should create shortened link" do
    assert_difference("Link.count") do
      post '/links', params: { :link => { :original_url => 'https://bigbinary.com/how-we-work/create-branch-starting-with-issue-number'} }
    end
  end

  test "should show link and increase click counter" do
    assert_difference("Link.count") do
      post '/links', params: { :link => { :original_url => 'https://bigbinary.com/how-we-work/create-branch-starting-with-issue-number'} }
    end

    assert_difference("Link.take.clicked",1) do
      slug = Link.take.slug
      get "/links/#{slug}"
    end
  end

  test "should update link by pinning it" do
    assert_difference("Link.count") do
      post '/links', params: { :link => { :original_url => 'https://bigbinary.com/how-we-work/create-branch-starting-with-issue-number'} }
    end

    #test for pinning a link
    assert("Link.take.is_pinned",true) do
      link = Link.take
      put "/links", params: {:link => link}
    end

    #test for unpinning a link
    assert("Link.take.is_pinned",false) do
      link = Link.take
      put "/links", params: {:link => link}
    end
  end
end
