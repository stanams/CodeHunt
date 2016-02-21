# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Products


- `GET /api/products`
    - index/search
- `POST /api/products`
- `GET /api/products/:id`
- `PATCH /api/products/:id`
- `DELETE /api/products/:id`


### Profiles

- `POST /api/profile`
- `GET /api/profile/:id`
- `PATCH /api/profile/:id`
- `DELETE /api/profile/:id`
- `GET /api/profile/:id/posts`
    - productList ‘published' tab
- `GET /api/profile/:id/followers`
    - list of followers for a user
- `GET /api/profile/:id/following`
    - list of followees for a user

### Comments

- `POST /api/product_id/comments`
- `GET /api/product_id/comments`
- `PATCH /api/product_id/comment_id`
- `DELETE /api/product_id/comment_id`


### Bonus: Tags/collections

- `GET /api/tag_id/products`
    - includes query param
- `POST /api/products/:product_id`
    - add tag to product by name
- `DELETE /api/products/:product_id/tags/:tag_name`
    - remove tag from product by name
