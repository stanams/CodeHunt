# CodeHunt

[Live link][heroku]

[heroku]: evening-sea-48514.herokuapp.com

## Overview

CodeHunt is a web application inspired by Product Hunt built using Ruby on Rails & PostgreSQL on the backend and React.js, HTML5, CSS3 on the frontend. CSS3 is fully custom.
The goal is to let developers discover and vote for the best dev products, from ruby gems to node packages, js frameworks or chrome extensions!

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->


## UX

### Login/signup

![Landing-signup](http://res.cloudinary.com/codehunt/image/upload/v1457727054/Login_signup_hbvzqj.png)

Login and signup are made using BCrypt to handle the hashing and salting of passwords in a very secure way.


### Index Page

![Index-page] (http://res.cloudinary.com/codehunt/image/upload/v1457727438/Index_page_pa2hla.png)

The index page displays the ranked list of products based on their upvotes count. Users can vote/unvote for any product (no downvotes) and add new products to the list. The rank is updated in real time when users take actions.
Users can see if they already voted for a product (count in blue) and can directly jump to the author profile page or the external link.
Codehunt uses acts_as_votable ruby gem to take benefit from methods brought by polymorphic associations setup.

### Product Page

![Product-page] (http://res.cloudinary.com/codehunt/image/upload/v1457727699/Product_Page_ucvuoy.png)

The product page displays all the product data as well as comments and the list of the people who voted for it. Users can still vote for the product on that page and get redirected to the product external link.

Comments and voters list are updated in real time. It's easy to navigate through profiles by just clicking on the displayed pictures.

### Profile Page

Users have a profile that displays all the products they've posted or upvoted. These product lists are still votable and can redirect to any of the relevant pages.

![Profile-page] (http://res.cloudinary.com/codehunt/image/upload/v1457728126/Profile_Page_ackziu.png)

### Features under development

- [ ] Tags
- [ ] Users follow
- [ ] Real-time search
- [ ] Chrome extension
