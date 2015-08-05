import AppDispatcher from '../dispatcher/FluxDispatcher';
import ModuleConstants from '../constants/ModuleConstants';
import constants from '../../configs/constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let error = null;
let lightData = null;
let soundData = null;

class ModuleStore extends EventEmitter {

  getLight() {
    return lightData;
  }

  getSound() {
    return soundData;
  }

  getError() {
    return error;
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

    case ModuleConstants.DATA_LIGHT_OK:
      lightData = action.data.value;
      error = action.data.error;
      _moduleStore.emitChange();
      break;

    case ModuleConstants.DATA_SOUND_OK:
      soundData = action.data.value;
      error = action.data.error;
      _moduleStore.emitChange();
      break;

    case ModuleConstants.DATA_SOUND_KO:
      soundData = action.data.value;
      error = action.data.error;
      _moduleStore.emitChange();
      break;

    default:
      break;
  }

});
