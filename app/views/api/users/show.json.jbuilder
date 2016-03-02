# later we'll add the votes (that we'll get through associations)
# json.partial!('user', user: @user)

json.id @user.id
json.username @user.username
json.bio @user.bio
json.products @user.products do |product|
  json.author_id product.author_id
  json.category product.category
  json.created_at product.created_at
  json.description product.description
  json.id product.id
  json.image product.image
  json.link product.link
  json.name product.name
  json.updated_at product.updated_at
  json.votes_count product.get_upvotes.size
end
json.voted_products @user.find_up_voted_items do |product|
  json.author_id product.author_id
  json.category product.category
  json.created_at product.created_at
  json.description product.description
  json.id product.id
  json.image product.image
  json.link product.link
  json.name product.name
  json.updated_at product.updated_at
  json.votes_count product.get_upvotes.size
end
# json.votes_count @user.products.
