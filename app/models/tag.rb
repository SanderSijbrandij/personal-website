class Tag < ApplicationRecord
  has_and_belongs_to_many :projects

  validates :text, presence: true, uniqueness: true
end
