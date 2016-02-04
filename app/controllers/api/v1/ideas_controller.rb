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
    @idea = Idea.find(params[:id]).update(idea_params)
    respond_with @idea, json: @idea
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

    def idea_params
      params.require(:idea).permit(:title, :body, :quality)
    end
end
