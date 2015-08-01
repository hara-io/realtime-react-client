import AppDispatcher from '../dispatcher/FluxDispatcher';
import DeviceConstants from '../constants/DeviceConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let device = null;
let list = {};

class DeviceStore extends EventEmitter {

  getDevice() {
    return device;
  }

  getList() {
    return list;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

}

let _deviceStore = new DeviceStore();

export default _deviceStore;

AppDispatcher.register((payload) => {

  let action = payload.action;

  switch(action.type) {

    case DeviceConstants.FETCH_CONFIG_OK:
      device = action.data.device;
      _deviceStore.emitChange();
      break;

    case DeviceConstants.FETCH_CONFIG_NOT_FOUND:
      device = action.data.device;
      _deviceStore.emitChange();
      break;

    case DeviceConstants.FETCH_ALL_OK:
      list = action.data.devices;
      _deviceStore.emitChange();
      break;

    default:
      break;
  }

});
