class Admin::StaticPagesController < Admin::BaseController
  def index
    @pages = StaticPage.all
  end

  def react_entry;end
end
