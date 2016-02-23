class SessionController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )

    if @user
      sign_in(@user)
      render :json
  end

  def destroy

  end

end
