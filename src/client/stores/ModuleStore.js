import AppDispatcher from '../dispatcher/FluxDispatcher';
import ModuleConstants from '../constants/ModuleConstants';
import constants from '../../configs/constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let lightData = null;
let soundData = null;

class ModuleStore extends EventEmitter {

  getLight() {
    return lightData;
  }

  getSound() {
    return soundData;
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

let _moduleStore = new ModuleStore();

export default _moduleStore;

AppDispatcher.register((payload) => {

  let action = payload.action;

  switch(action.type) {

    case ModuleConstants.DATA_OK:
      if (action.data.value && action.data.value.type == constants.module.sound.code) {
        soundData = action.data.value;
      }
      else if (action.data.value && action.data.value.type == constants.module.light.code) {
        lightData = action.data.value;
      }
      else {
        soundData = null;
        lightData = null;
      }
      _moduleStore.emitChange();
      break;

    default:
      break;
  }

});
