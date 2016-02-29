class AddPicturesToUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_pic, :string
    add_column :products, :image, :string
  end
end
