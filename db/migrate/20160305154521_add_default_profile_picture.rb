class AddDefaultProfilePicture < ActiveRecord::Migration
  def change
    change_column :users, :profile_pic, :string, :default => "https://40.media.tumblr.com/tumblr_lkoxtzsa981qe25ajo1_400.jpg"
  end
end
