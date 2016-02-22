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
- styling, testing and refactoring are continuous tasks

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Products (2 days)

**Objective:** Products can be created, read, edited and destroyed through
the API.

- [ ] create `Product` model
- [ ] CRUD API for products (`ProductController`)
- [ ] jBuilder views for product
- [ ] setup Webpack & Flux scaffold
- [ ] ProductActions
- [ ] setup API and basic `APIUtil` to interact with it
- [ ] Make the `ProcuctStore`
- [ ] seed the database with a small amount of test data
- [ ] test out API interaction in the console.
- [ ] display a `ProductList` composed of `ProductListItem`s on index
- [ ] style the list
- [ ] make product page (data and style)
- [ ] Bonus: product modal on home page (cf wireframes)


### Phase 3: Vote up and ranked list (1.5 days)

**Objective:** Ability to vote up for a product and get a list of ranked product from the most upvoted to the least ones

- Votes belongs user and product has many votes. Product list is ranked by votes
- [ ] create `Vote` model and associations
- Build out API, Flux loop, and component for:
  - [ ] Vote CRUD
  - [ ] Products are ranked by Votes on index (DESC order)
  - [ ] Votes can be viewed on user profile
- [ ] Start setting up the router
- [ ] Style & utilize the new components: vote button, voters picture on `ProductItemList`, display votes data on products page

### Phase 4: Profile (1.5 days)

**Objective:** Make user profiles with basic infos and tabs that display the appropriate content

- [ ] Make the router for the tabs displayed on profile page (products voted, products posted)
- [ ] jBuilder views for profile
- [ ] Display filtered products list under appropriate tabs (voted vs. posted)
- [ ] Update the new user form and the user edit form
- [ ] Seed database with fake profiles (or ask other students)
- [ ] Make the profile sexy
- [ ] Bonus: popovers when overing on profile pictures


### Phase 5: Comments (1.5 days)

**Objective:** Allow users to make comments on product pages

- Comments belongs to a product and a user and product has many comments:
- [ ] create `Comment` model (require sign in)
- build out API, Flux loop, and components for comments:
  - [ ] `Comment` CRUD
  - [ ] Comments are seen on product page
- [ ] Style and utilize comments on the appropriate pages


### Bonus Features (TBD)
- [ ] tags
- [ ] follow
- [ ] Infinite scroll
- [ ] SubComments-replies
- [ ] Collections
- [ ] Bookmarklet

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
