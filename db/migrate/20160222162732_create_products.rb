class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|

      t.string :name, null: false, index: true
      t.text :description, null: false
      t.integer :author_id, null: false, index: true
      # TODO: will distinguish author and maker in a later phase
      t.string :link, null: false, indexed: true

      t.timestamps null: false
    end
  end
end
