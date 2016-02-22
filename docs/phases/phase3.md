# Phase 3: Vote up and ranked list (1.5 days)

Make the router, db connections and test the whole loop.

### Controllers
* Api::ProductsController (create, destroy, index, show, update)

### Views
* jbuilder views

## Flux
### Views (React Components)
* ProductsList
  - NotesListItem
* ProductForm

### Stores
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
