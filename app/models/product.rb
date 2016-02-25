class Product < ActiveRecord::Base
  validates :name, :description, :link, :author_id, presence: true
  validates :name, :link, uniqueness: true
  belongs_to :user,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: 'User'
end
