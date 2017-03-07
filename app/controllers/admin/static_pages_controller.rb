class Admin::StaticPagesController < Admin::BaseController
  def create
    page = StaticPage.new(page_params)
    if page.save
      render json: page
    end
  end

  def update
    page = StaticPage.find(params[:link])
    if page.update_attributes(page_params)
      render json: page
    end
  end

  def destroy
    page = StaticPage.find(params[:link])
    page.destroy
    render json: page
  end

  def react_entry;end

  private
    def page_params
      params.require(:static_page).permit(:link, :title, :content)
    end
end
