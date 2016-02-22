var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var UserConstants = require('../constants/user_constants');

var UserStore = new Store(Dispatcher);

var _currentUser = null;

UserStore.currentUser = function() {
  return _currentUser;
};

UserStore.removeCurrentUser = function() {
  _currentUser = null;
  UserStore.__emitChange();
};

UserStore.setCurrentUser = function(user) {
  if (user.id) { _currentUser = user; }
  else { _currentUser = null; }
  UserStore.__emitChange();
};

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.LOG_IN_USER:
      UserStore.setCurrentUser(payload.user);
      break;
    case UserConstants.LOG_OUT_USER:
      UserStore.removeCurrentUser();
      break;
  }

};

module.exports = UserStore;
