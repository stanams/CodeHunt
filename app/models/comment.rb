class Comment < ActiveRecord::Base
  validates :body, :commenter_id, :product_id, presence: true

  belongs_to :product,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: 'Product'

  belongs_to :commenter,
    foreign_key: :commenter_id,
    primary_key: :id,
    class_name: "User"

end
