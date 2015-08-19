import request from 'superagent';
import format from 'string-format-js';
import config from '../../configs/params';
import AppDispatcher from '../dispatcher/FluxDispatcher';
import DeviceConstants from '../constants/DeviceConstants';

export default {

  fetchAll: () => {
    request.get(config.api.device.getList)
      .auth(config.auth.name, config.auth.password)
      .end(function(err, res) {
        if (!err) {
          AppDispatcher.handleAction({
              type: DeviceConstants.FETCH_ALL_OK,
              data: {
                devices: res.body,
                error: null
              }
          });
        }
        else {
          AppDispatcher.handleAction({
              type: DeviceConstants.FETCH_ALL_KO,
              data: {
                devices: {},
                error: err
              }
          });
        }
      });
  },

  fetch: (deviceId) => {
    if (deviceId) {
      request.get(config.api.device.getDevice.format(deviceId))
        .auth(config.auth.name, config.auth.password)
        .end(function(err, res) {
          if (!err) {
            AppDispatcher.handleAction({
                type: DeviceConstants.FETCH_CONFIG_OK,
                data: {
                  device: res.body[0],
                  error: null
                }
            });
          }
          else {
            AppDispatcher.handleAction({
                type: DeviceConstants.FETCH_CONFIG_KO,
                data: {
                  device: null,
                  error: err
                }
            });
          }
        });
    }
    else {
      AppDispatcher.handleAction({
          type: DeviceConstants.FETCH_CONFIG_NOT_FOUND,
          data: {
            device: null,
            error: null
          }
      });
    }
  }

}
