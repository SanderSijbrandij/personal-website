class StaticPage < ApplicationRecord
  self.primary_key = 'link'

  validates :link, presence: true
  validates :title, presence: true, length: { minimum: 5, maximum: 20}
  validates :content, presence: true
end
