class StaticPageSerializer < ActiveModel::Serializer
  attributes :link, :title, :content
end
