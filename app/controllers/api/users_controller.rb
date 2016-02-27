class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
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

end
