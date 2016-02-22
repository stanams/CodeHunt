# Phase 2: Flux Architecture and Product CRUD (2 days)

## Rails
### Models

### Controllers
* Api::ProductsController (create, destroy, index, show, update)

### Views
* jbuilder views

## Flux
### Views (React Components)

### Stores
* UserStore
* ProductStore

### Actions
* ApiActions.receiveAllProduct -> triggered by ApiUtil
* ApiActions.receiveSingleProduct
* ProductActions.fetchAllProducts -> triggers ApiUtil
* ProductActions.fetchSingleProduct
* ProductActions.createProduct
* ProductActions.editProduct
* ProductActions.destroyProduct

### ApiUtil
* ApiUtil.fetchAllProducts
* ApiUtil.fetchSingleProduct
* ApiUtil.createProduct
* ApiUtil.editProduct
* ApiUtil.destroyProduct

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
