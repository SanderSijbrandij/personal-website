class StaticPagesController < ApplicationController
  def index
    @pages = StaticPage.all.order(:title)
    render json: @pages
  end

  def show
    @page = StaticPage.find(params[:link])
    render json: @page
  end

  def react_entry; end
end
