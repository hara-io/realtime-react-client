import request from 'superagent';
import AppDispatcher from '../dispatcher/FluxDispatcher';
import ModuleConstants from '../constants/ModuleConstants';

export default {

  fetch: (deviceId, type) => {
    request.get('http://localhost:3000/tessel/ambient/last/' + deviceId + '/' + type)
      .auth('tessel', 'tessel123')
      .end(function(err, res) {
        AppDispatcher.handleAction({
            type: ModuleConstants.DATA_OK,
            data: {
              value: res.body
            }
        })
      });
  }

}
