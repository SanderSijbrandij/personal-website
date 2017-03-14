class Admin::ProjectsController < Admin::BaseController
  def create
    project = Project.new(project_params)
    if project.save
      render json: project
    end
  end

  def update
    project = Project.find(params[:id])
    if project.update_attributes(project_params)
      render json: project
    end
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
    render json: project
  end

  def react_entry;end

  private
    def project_params
      params.require(:project).permit(:title, :subtitle, :description, :image,
                                      :github, :preview, :tags)
    end
end
