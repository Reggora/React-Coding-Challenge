class Cat < ApplicationRecord
validates :name, :description, :breed, :age, :weight, presence: true

has_one_attached :photo
end