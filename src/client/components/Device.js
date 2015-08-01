import React from 'react';
import Module from './Module';
import DeviceActions from '../actions/DeviceActions';
import DeviceStore from '../stores/DeviceStore';

class Device extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      device: null
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
    this.setState({
      device: DeviceStore.getDevice()
    });
  }

  render() {
  	return (
      <div>
        <p>Tessel config:</p>
        { this.state.device }
        <div>
          <Module guid={ this.state.device && this.state.device.id } type="L" />
          <Module guid={ this.state.device && this.state.device.id } type="S" />
        </div>
      </div>
  	);
  }

}

export default Device;
