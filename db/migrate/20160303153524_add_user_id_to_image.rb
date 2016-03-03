class AddUserIdToImage < ActiveRecord::Migration
  def change
    add_column :images, :product_id, :integer
    add_index :images, :product_id
  end
end
