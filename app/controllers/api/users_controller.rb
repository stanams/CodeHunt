class Api::UsersController < ApplicationController

  def show
    @user = User.includes(:products).find(params[:id])
  end

  def index

    # debugger

    if params[:users_list]
      users_array = params[:users_list].split(',').map(&:to_i)
      @users = User.where(id: users_array)
    else
      @users = User.all
    end

  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :bio, :profile_pic)
  end

end
