var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');
var UserStore = new Store(Dispatcher);

var _users = {};

var resetUsers = function (users) {
  _users = {};
  users.forEach(function (user) {
    _users[user.id] = user;
  });
};

var resetUser = function (user) {
  _users[user.id] = user;
};

UserStore.find = function (id) {
  return _users[id];
}

UserStore.select = function (idsArray) {
  selectedUsers = [];
  for (var idx = 0; i < idsArray.length; i++) {
    selectedUsers.push(UserStore.find(idsArray[idx]));
  }
  return selectedUsers;
}

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      resetUser(payload.commenter);
      UserStore.__emitChange();
      break;
    case UserConstants.USERS_RECEIVED:
      resetUser(payload.commenter);
      UserStore.__emitChange();
      break;
  }

};

module.exports = UserStore;
