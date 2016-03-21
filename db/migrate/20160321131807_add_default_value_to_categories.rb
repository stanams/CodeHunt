class AddDefaultValueToCategories < ActiveRecord::Migration
  def change
    change_column :products, :category, :string, default: "JS Lib"
  end
end
