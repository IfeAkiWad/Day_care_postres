class Api::class DaycaresController < ApplicationController
  before_action :set_daycare, only: [:show]

  # GET /daycares
  def index
    @daycares = Daycare.all

    render json: @daycares, except: [:created_at, :updated_at], include: [:toddlers]
  end

  # GET /daycares/1
  def show
    render json: @daycare, except: [:created_at, :updated_at], include: [:toddlers]
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_daycare
      @daycare = Daycare.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def daycare_params
      params.require(:daycare).permit(:name, :address)
    end
end
