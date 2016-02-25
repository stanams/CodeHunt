class Comment < ActiveRecord::Base
  validates :body, :commenter_id, :product_id, presence: true

  belongs_to :product,
    foreign_id: :product_id,
    primary_key: :id,
    class_name: 'Product'

  belongs_to :commenter,
    foreign_id: :user_id,
    primary_key: :id,
    class_name: "User"

end
