import React from 'react';
import Module from './Module';
import constants from '../../configs/constants';
import Error from '../components/Error';
import DeviceActions from '../actions/DeviceActions';
import DeviceStore from '../stores/DeviceStore';

class Device extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      device: null,
      showDevice: false,
      error: null
    };
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    DeviceStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    DeviceStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    let dev = DeviceStore.getDevice();
    this.setState({
      device: dev,
      showDevice: (dev == null) ? false : true,
      error: DeviceStore.getError()
    });
  }

  render() {

    let html = null;
    if (this.state.error) {
      html = (
        <Error code="" title={ this.state.error.message } description={ this.state.error.stack } />
      );
    }
    else {
      html = (<div className="device-not-found">
        <span className="not-found-title">No device selected</span>
      </div>);

      if (this.state.showDevice) {
        html = (<div>
          <div className="modules-container">
            <Module device={ this.state.device } type={ constants.module.light.code } />
            <Module device={ this.state.device } type={ constants.module.sound.code } />
          </div>
        </div>);
      }
    }

  	return (
      html
    );
  }

}

export default Device;
