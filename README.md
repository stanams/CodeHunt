# CodeHunt

[Heroku link][heroku] soon

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

CodeHunt is a web application inspired by Product Hunt built using Ruby on Rails
and React.js. CodeHunt allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account and fill a profile
- [ ] Create/distroy session
- [ ] Create, read, edit, and delete product
- [ ] Vote/unvote for product (no downvote)
- [ ] Comment on a product
- [ ] View product list
- [ ] View product page
- [ ] Follow/be followed by other users
- [ ] Search for products by name/tag

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: https://invis.io/7D64NUL6W
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Product Model, API and basic APIUtil (1.5 days)

**Objective:** Products can be created, read, edited and destroyed through
the API.

- [ ] create `Product` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for products (`ProductController`)
- [ ] jBuilder views for product
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux architecture and router (1.5 days)

**Objective:** Products can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each product component, building out the flux loop as needed:
  - [ ] `ProductIndex`
  - [ ] `ProductIndexItem`
  - [ ] `NewProductForm`
- [ ] save Products to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Vote up and rank (1 day)

**Objective:** Votes belongs user and product has many votes. Product list is ranked by votes

- [ ] create `Vote` model
- build out API, Flux loop, and component for:
  - [ ] Vote CRUD
  - [ ] Products are ranked by Votes on index (DESC order)
  - [ ] Votes can be viewed on user profile

### Phase 5: Start styling (check scss) (1 day)

**Objective:** Existing pages (including singup/signin) will look sexy.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add colors & styles

### Phase 6: Comments (1 day)

**Objective:** Comments belongs to a product and a user and product has many comments

- [ ] create `Comment` model
- build out API, Flux loop, and components for comments:
  - [ ] `Comment` CRUD
  - [ ] Comments are seen on product page
- [ ] Style new elements

### Phase 7: Follow (0.5 days)

**objective:** Users can follow each other

- [ ] Users followers are viewed on user profile
- [ ] Users followees are viewed on user profile
- [ ] Users can be searched by name

### Phase 8: Tags (1 day)

**objective:** Tag has many products through tagging and product has many tags through tagging

- create join table
- build out API, Flux loop, and components for comments:
  - `Tag` CRUD
  - [ ] User can tag a product
  - [ ] User followers are viewed on user profile
  - [ ] Products can be searched by tag and by name
  - [ ] Tags search is viewed as a product list
- Style tag


### Phase 9: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals (product modal on index), transitions, popover, tooltips and other styling flourishes.

### Bonus Features (TBD)
- [ ] Infinite scroll
- [ ] SubComments-replies
- [ ] Collections
- [ ] Bookmarklet

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
