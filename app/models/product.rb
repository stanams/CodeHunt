class Product < ActiveRecord::Base
  validates :name, :description, :link, :author_id, presence: true
  validates :name, :link, uniqueness: true

  acts_as_votable

  belongs_to :user,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: 'User'

  has_many :comments,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: 'Comment'
  # dependant: :destroy

end
