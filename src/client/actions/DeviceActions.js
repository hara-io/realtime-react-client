import request from 'superagent';
import AppDispatcher from '../dispatcher/FluxDispatcher';
import DeviceConstants from '../constants/DeviceConstants';

export default {

  fetchAll: () => {
    request.get('http://localhost:3000/tessel/device/list')
      .auth('tessel', 'tessel123')
      .end(function(err, res) {
        AppDispatcher.handleAction({
            type: DeviceConstants.FETCH_ALL_OK,
            data: {
              devices: res.body
            }
        })
      });
  },

  fetch: (deviceId) => {
    if (deviceId) {
      request.get('http://localhost:3000/tessel/device/list/' + deviceId)
        .auth('tessel', 'tessel123')
        .end(function(err, res) {
          AppDispatcher.handleAction({
              type: DeviceConstants.FETCH_CONFIG_OK,
              data: {
                device: res.body[0]
              }
          });
        });
    }
    else {
      AppDispatcher.handleAction({
          type: DeviceConstants.FETCH_CONFIG_NOT_FOUND,
          data: {
            device: null
          }
      });
    }
  }

}
