class ToddlersController < ApplicationController
  before_action :set_daycare
  before_action :set_toddler, only: [:show, :destroy]

  # GET /toddlers
  def index
    @toddlers = Toddler.all
    render json: @toddlers
  end

  # GET /toddlers/1
  def show
    render json: @toddler
  end

  # POST /toddlers
  def create
    @toddler = @daycare.toddlers.new(toddler_params)

    if @toddler.save
      render json: @toddler, status: :created, location: @toddler
    else
      render json: @toddler.errors, status: :unprocessable_entity
    end
  end

  # DELETE /toddlers/1
  def destroy
    @toddler.destroy
    render json: {message: "Successfully deleted #{@toddler.name}!"}

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_toddler
      @toddler = Toddler.find(params[:id])
    end

    def set_daycare
      @daycare = Daycare.find_by(params[:daycare_id])
    end

    # Only allow a trusted parameter "white list" through.
    def toddler_params
      params.require(:toddler).permit(:name, :birthday, :contact, :phone, :allergy, :daycare_id)
    end
end
