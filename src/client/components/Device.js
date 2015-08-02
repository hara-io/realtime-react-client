import React from 'react';
import Module from './Module';
import DeviceActions from '../actions/DeviceActions';
import DeviceStore from '../stores/DeviceStore';

class Device extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      device: null,
      showDevice: false
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
      showDevice: (dev == null) ? false : true
    });
  }

  render() {

    let html = (<div>No device selected</div>);
    if (this.state.showDevice) {
      html = (<div>
        <p>Tessel config:</p>
        <ul>
          <li>ID: {this.state.device.id}</li>
          <li>MODEL: {this.state.device.model}</li>
          <li>NAME: {this.state.device.name}</li>
          <li>LIGHT: {this.state.device.ConfigAmbientLight.threshold}</li>
          <li>SOUND: {this.state.device.ConfigAmbientSound.threshold}</li>
        </ul>
        <br/>
        <div>
          <Module guid={ this.state.device.id } type="L" />
          <Module guid={ this.state.device.id } type="S" />
        </div>
      </div>);
    }

  	return (
      html
  	);
  }

}

export default Device;
