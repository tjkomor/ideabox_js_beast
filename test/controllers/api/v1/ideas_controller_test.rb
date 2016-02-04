require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test '#index returns data success' do
    get :index, format: :json

    assert_response :success
  end

  test '#index is in form of array' do
    get :index, format: :json

    assert_kind_of Array, json_response_body
  end

  test '#index returns correct number of objects' do
    get :index, format: :json

    assert_equal Idea.count, json_response_body.count
  end

  test '#index returns expected rows' do
    get :index, format: :json

    json_response_body.each do |row|
      assert row["title"]
      assert row["body"]
      assert row["id"]
      assert row["quality"]
    end
  end
end
