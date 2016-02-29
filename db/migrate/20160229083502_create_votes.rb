class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|

      t.integer :user_id, null: false, index: true
      t.integer :product_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
