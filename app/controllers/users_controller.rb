class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :update]
  rescue_from ActiveRecord::RecordInvalid, with: :invalid
  
  def show
    render json: @current_user
  end

  def update
    user = User.find!(params[:id])
    user.update!(profile_params)
    render json: user, status: :ok
   end
  
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end
  
  def destroy
    user = User.find!(params[:id])
    user.destroy
    head :no_content
  end
    
  private
    
  def user_params
    params.permit(:firstName, :lastName, :email, :password, :longitude, :latitude, :isSafe)
  end

   
  def invalid
    render json: {errors: ["Username has been taken, Please try other username "]}, status: :unprocessable_entity
  end
end
