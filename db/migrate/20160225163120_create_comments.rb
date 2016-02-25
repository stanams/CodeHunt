class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|

      t.integer :commenter_id, null: false, index: true
      t.string :body, null: false
      t.integer :product_id, null: false, index: true
      t.integer :parent_id
      
      t.timestamps null: false
    end
  end
end
