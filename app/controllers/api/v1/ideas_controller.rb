class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    @ideas =  Idea.all
    render :json => @ideas
  end

  def create
    respond_with Idea.create(idea_params)
  end

  def update
    respond_with Idea.update(params[:id], idea_params)
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

    def private_params
      params.require(:idea).permit(:title, :body, :quality)
    end
end
