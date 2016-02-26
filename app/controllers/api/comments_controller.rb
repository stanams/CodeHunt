class Api::CommentsController < ApplicationController

  def show
    @comments = Comment.where("product_id = ?", params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  # def destroy
  #   @comment = Comment.find(params[:id])
  #   if @comment.destroy
  #     render :show
  #   else
  #     render json: @comment.errors.full_messages, status: 422
  #   end
  # end

  private
  def comment_params
    params.require(:comment).permit(:body, :product_id)
  end
end
