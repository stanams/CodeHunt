# later we'll add the votes (that we'll get through associations)
# json.partial!('user', user: @user)

json.id @user.id
json.username @user.username
json.bio @user.bio
json.products @user.products
