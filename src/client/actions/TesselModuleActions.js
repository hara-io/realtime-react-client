import AppDispatcher from '../dispatcher/FluxDispatcher';

var tesselModuleActions = {

  update: function(guid, type) {
    AppDispatcher.dispatch({
      actionType: 'UPDATE',
      guid: guid,
      type: type
    });
  }
}

module.exports = tesselModuleActions;
