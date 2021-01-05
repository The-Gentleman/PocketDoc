class Exercise < ApplicationRecord
  belongs_to :patient
  validates :name, uniqueness: true
end
