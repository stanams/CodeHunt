json.id @user.id
json.username @user.username
json.bio @user.bio
json.logged (@user == current_user)
json.current_user current_user
json.picture @user.profile_pic
json.products @user.products do |product|
  json.author_id product.author_id
  json.author product.user
  json.category product.category
  json.created_at product.created_at
  json.description product.description
  json.id product.id
  json.image product.image
  json.link product.link
  json.name product.name
  json.updated_at product.updated_at
  json.votes_count product.get_upvotes.size
  json.voted product.votes_for.up.by_type(User).map{|vote| vote.voter_id}.include?(current_user.id)
end
json.voted_products @user.find_up_voted_items do |product|
  json.author_id product.author_id
  json.author product.user
  json.category product.category
  json.created_at product.created_at
  json.description product.description
  json.id product.id
  json.image product.image
  json.link product.link
  json.name product.name
  json.updated_at product.updated_at
  json.votes_count product.get_upvotes.size
  json.voted product.votes_for.up.by_type(User).map{|vote| vote.voter_id}.include?(current_user.id)
end
# json.votes_count @user.products.
