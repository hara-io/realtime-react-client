import AppDispatcher from '../dispatcher/FluxDispatcher';
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var tesselModuleStore = objectAssign({}, EventEmitter.prototype, {

  addChangeListener: function(cb) {
    this.on('change', cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener('change', cb);
  },

  getList: function() {
    return ['apple', 'orange', 'banana'];
  },

  emitChange: function() {
    this.emit('change');
  },

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case 'UPDATE':
      tesselModuleStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = tesselModuleStore;
