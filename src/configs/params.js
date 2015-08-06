let params = {};

params['auth'] = {
  name: 'tessel',
  password: 'tessel123'
};

params['host'] = {
  name: 'localhost',
  port: '3000'
}

params['domain'] = 'http://' + params.host.name + ':' + params.host.port

params['api'] = {
  module: {
    getLast: params.domain + '/tessel/ambient/last/%s/%s'
  },
  device: {
    getList: params.domain + '/tessel/device/list',
    getDevice: params.domain + '/tessel/device/list/%s'
  }
}

export default params;
