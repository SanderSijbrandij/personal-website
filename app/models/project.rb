class Project < ApplicationRecord
  has_and_belongs_to_many :tags

  VALID_URL = /(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?/ix

  validates_presence_of :title, length: { min: 10, max: 30 }
  validates_presence_of :subtitle, length: { min: 10, max: 50 }
  validates_presence_of :description
  validates_presence_of :image, format: { with: VALID_URL }
  validates :github, format: { with: VALID_URL }
  validates :preview, format: { with: VALID_URL }
end
