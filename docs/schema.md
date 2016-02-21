# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null, indexed, unique
session_token   | string    | not null, indexed, unique


## products
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
maker_id    | integer   | not null, foreign key (references users), default author_id, indexed
link        | string    |


## comments
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
author_id           | integer   | not null, foreign key (references users), indexed
body                | string    | not null
product_id          | string    | not null, foreign key (references products), indexed
parent_comment_id   | integer   | foreign key (references comments), indexed


## votes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
product_id  | integer   | not null, foreign key (references products), indexed


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
product_id  | integer   | not null, foreign key (references products), indexed
