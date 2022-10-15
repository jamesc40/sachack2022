class UsersController < ApplicationController
  #   skip_before_action :authorize, only: [ :index, :create]
  
  def show
    user = User.find(session[:user_id])
    render json: user, status: :ok
  end
  
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end
  
  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end
    
  private
    
  def user_params
    params.permit(:firstName, :lastName, :email, :password, :password_digest, :longitude, :latitude, :isSafe)
  end
end