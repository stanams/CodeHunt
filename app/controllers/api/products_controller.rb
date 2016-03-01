class Api::ProductsController < ApplicationController

  def index
    @current_user = current_user
    @products = Product.includes(:comments, :votes_for).all #.order(:votes_for.size)
  end

  def new
    @product = Product.new
  end

  def create
    @product = current_user.products.new(product_params)
    if @product.save
      render :show
    else
      render json: @product.errors.full_messages
    end
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render :show
    else
      render json: @product.errors.full_messages
    end
  end

  def show
    # debugger
    @current_user = current_user
    @product = Product.find(params[:id])
  end

  def upvote
    @product = Product.find(params[:id])
    @product.upvote_by current_user
    render :show
  end

  def downvote
    @product = Product.find(params[:id])
    current_user.votes.where(votable_id: params[:id]).destroy_all
    render :show
  end

  private
  def product_params
    params.require(:product).permit(:name, :description, :link)
  end

end
