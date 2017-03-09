class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :subtitle, :description, :image, :github, :preview
  
end
