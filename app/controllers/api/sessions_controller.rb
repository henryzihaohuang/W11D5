class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
      
    end
  end

  def destroy
    if current_user
      logout!
      # render "api/session"
    else
      render json: ["No current user logged in"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
