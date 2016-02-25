class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.product_id = params[:product_id]

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages
    end
  end

  def edit
    @comment =
  end

  def update
  end

  def destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
