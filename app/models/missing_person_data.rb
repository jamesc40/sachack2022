class MissingPersonData < ApplicationRecord
  validates :name, presence: true
  validates :age, presence: true
  validates :gender, presence: true, inclusion: { in: %w( male female),
    message: '%{value} is not valid, please enter biological sex'}
  validates :eyeColor, presence: true
  validates :hairColor, presence: true
  validates :height, presence: true, numericality: true
  validates :weight, presence: true, numericality: true
  validates :ethnicity, presence: true
  validates :description, presence: true, length: { maximum: 500 }
end
