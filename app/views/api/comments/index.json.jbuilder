json.array! @comments do |comment|
  json.body comment.body
  json.commenter_id comment.commenter_id
  json.product_id comment.product_id
  json.id comment.id
  json.commenter_name comment.commenter.username.capitalize
  json.commenter comment.commenter
end

# ici on dit que 'commenter' est la props, et que sa data
# c'est comment.commenter.username.capitalize
