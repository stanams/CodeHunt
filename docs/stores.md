# Flux Stores

### ProductStores

Holds all persisted note data.

##### Actions:
- `receiveAllProducts`
- `receiveSingleProduct`
- `editProduct`
- `removeProduct`

##### Listeners:
- `ProductList`
- `ProductItem`

### ProductFormStore

Holds un-persisted product data to send to the API.

##### Actions:
- `receiveProductFormParams`

##### Listeners:
- `ProductForm`

### SearchStore

##### Actions:
- `receiveSearchParams`

##### Listener:
- `Search`


### CommentsStore

##### Actions:
- `receiveAllComments`

##### Listeners:
- `CommentsList`

### CommentFormStore

Holds un-persisted comment data to send to the API.

##### Actions:
- `receiveNewCommentParams`

##### Listeners:
- `NewCommentForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `Search`


### TagsStore

Holds un-persisted tag data to send to the API.

##### Actions:
- `receiveTaggedProduct`

##### Listeners:
- `Search`
