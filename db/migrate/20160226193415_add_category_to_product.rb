class AddCategoryToProduct < ActiveRecord::Migration
  def change
    add_column :products, :category, :string
    add_index :products, :category
  end
end
