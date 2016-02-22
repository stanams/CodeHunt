class ProductController < ApplicationController
  def index
    @products = Product.all
  end

  def new
    @product = Product.new
  end

  def create
    @product = current_user.products.new(product_params)
    if @product.save
      render :json
    else
      flash.now[:errors] = @product.errors.full_messages
      render :new
    end
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render :json
    else
      flash.now[:errors] = @product.errors.full_messages
      render :edit
    end
  end

  def show
    @product = Product.find(params[:id])
  end

  private
  def product_params
    params.require(:product).permit(:title, :description, :link)
  end

end
