import request from 'superagent';
import config from '../../configs/params';
import constants from '../../configs/constants';
import AppDispatcher from '../dispatcher/FluxDispatcher';
import ModuleConstants from '../constants/ModuleConstants';

export default {

  fetch: (deviceId, type) => {
    request.get('http://localhost:3000/tessel/ambient/last/' + deviceId + '/' + type)
      .auth(config.auth.name, config.auth.password)
      .end(function(err, res) {
        if (type == constants.module.sound.code) {
          if (!err) {
            AppDispatcher.handleAction({
                type: ModuleConstants.DATA_SOUND_OK,
                data: {
                  value: res.body,
                  error: null
                }
            });
          }
          else {
            AppDispatcher.handleAction({
                type: ModuleConstants.DATA_SOUND_KO,
                data: {
                  value: null,
                  error: err
                }
            });
          }
        }
        else if (type == constants.module.light.code) {
          if (!err) {
            AppDispatcher.handleAction({
                type: ModuleConstants.DATA_LIGHT_OK,
                data: {
                  value: res.body,
                  error: null
                }
            });
          }
          else {
            AppDispatcher.handleAction({
                type: ModuleConstants.DATA_LIGHT_KO,
                data: {
                  value: null,
                  error: err
                }
            });
          }
        }
      });
  },

  startSocket: () => {

  }

}
