class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where("product_id = ?", params[:product_id])
  end

  def create
    @comment = Comment.new(comment_params)
    # @comment.commenter_id = current_user.id

    @comment.save
    render :new
    #
    # else
    #   render json: @comment.errors.full_messages, status: 422
    # end
  end

  def show
    render :show
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
    params.require(:comment).permit(:body, :product_id, :commenter_id)
  end
end
