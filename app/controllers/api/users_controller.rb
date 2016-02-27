class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  # Will need to create filtered query on index method when displaying all the voters for ex

end
