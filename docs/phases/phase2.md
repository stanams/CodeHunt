# Phase 2: Products (2 days)

## Rails
### Models

### Controllers
* Api::ProductsController (create, destroy, index, show, update)

### Views
* products/index.json.jbuilder
* product/show.json.jbuilder

## Flux
### Views (React Components)
* ProductList
* ProductListItem

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
