require 'test_helper'

class DaycaresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @daycare = daycares(:one)
  end

  test "should get index" do
    get daycares_url, as: :json
    assert_response :success
  end

  test "should create daycare" do
    assert_difference('Daycare.count') do
      post daycares_url, params: { daycare: { address: @daycare.address, name: @daycare.name } }, as: :json
    end

    assert_response 201
  end

  test "should show daycare" do
    get daycare_url(@daycare), as: :json
    assert_response :success
  end

  test "should update daycare" do
    patch daycare_url(@daycare), params: { daycare: { address: @daycare.address, name: @daycare.name } }, as: :json
    assert_response 200
  end

  test "should destroy daycare" do
    assert_difference('Daycare.count', -1) do
      delete daycare_url(@daycare), as: :json
    end

    assert_response 204
  end
end
