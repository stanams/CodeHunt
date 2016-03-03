class Api::ImagesController < ApplicationController

  def show
    @image = Image.find(params[:id])
  end

  def new
    @image = Image.new
  end

  def create
     @image = Image.new(image_params)
     if @image.save
       render :show
     else
       flash.now[:errors] = @user.errors.full_messages
       render :new
     end
 end

 def update
  @image = Image.find(params[:id])
 end

 private
 def image_params
   params.require(:image).permit(:url)
 end

end
