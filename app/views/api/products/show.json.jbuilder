json.id @product.id
json.name @product.name
json.description @product.description
json.link @product.link
json.author @product.user
json.comments_count @product.comments.length
json.votes_count @product.get_upvotes.size
json.voters @product.votes_for.up.by_type(User)
