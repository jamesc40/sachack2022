class MissingPersonDataController < ApplicationController
  def index
    missingPersonData = MissingPersonData.all
    render json: missingPersonData, status: :ok
  end
  
  def show
    missingPersonData = MissingPersonData.find(session[:missing_person_data_id])
    render json: missingPersonData, status: :ok
  end
  
  def create
    missingPersonData = MissingPersonData.create!(missing_person_data_params)
    render json: missingPersonData, status: :created
  end

  def update
    missingPersonData = MissingPersonData.find(params[:id])
    missingPersonData.update(missing_person_data_params)
    render json: missingPersonData, status: :ok
  end
  
  def destroy
    missingPersonData = MissingPersonData.find(params[:id])
    missingPersonData.destroy
    head :no_content
  end

  private

  def missing_person_data_params
    params.permit(:name, :age, :gender, :eyeColor, :hairColor, :height, :weight, :ethnicity, :description)
  end


end
