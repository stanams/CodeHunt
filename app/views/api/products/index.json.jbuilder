json.array!(@products) do |product|
  json.partial!('product', product: product)
end


# , number_of_comments: product.comments.length
