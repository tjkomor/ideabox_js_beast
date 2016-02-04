class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    @ideas =  Idea.all
    render :json => @ideas
  end

  def create
    @idea = Idea.create(idea_params)

    if @idea.save
      respond_with :api, :v1, @idea
    end
  end

  def update
    respond_with Idea.update(params[:id], idea_params)
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

    def idea_params
      params.require(:idea).permit(:title, :body, :quality)
    end
end
