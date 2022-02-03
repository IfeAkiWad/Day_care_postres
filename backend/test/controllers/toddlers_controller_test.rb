require 'test_helper'

class ToddlersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @toddler = toddlers(:one)
  end

  test "should get index" do
    get toddlers_url, as: :json
    assert_response :success
  end

  test "should create toddler" do
    assert_difference('Toddler.count') do
      post toddlers_url, params: { toddler: { allergy: @toddler.allergy, birthday: @toddler.birthday, daycare_id: @toddler.daycare_id, eemergency_contact: @toddler.eemergency_contact, name: @toddler.name, phone: @toddler.phone } }, as: :json
    end

    assert_response 201
  end

  test "should show toddler" do
    get toddler_url(@toddler), as: :json
    assert_response :success
  end

  test "should update toddler" do
    patch toddler_url(@toddler), params: { toddler: { allergy: @toddler.allergy, birthday: @toddler.birthday, daycare_id: @toddler.daycare_id, eemergency_contact: @toddler.eemergency_contact, name: @toddler.name, phone: @toddler.phone } }, as: :json
    assert_response 200
  end

  test "should destroy toddler" do
    assert_difference('Toddler.count', -1) do
      delete toddler_url(@toddler), as: :json
    end

    assert_response 204
  end
end
