import React from 'react';
import ModuleActions from '../actions/ModuleActions';
import ModuleStore from '../stores/ModuleStore';
import DeviceStore from '../stores/DeviceStore';

class Module extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this._onChange = this._onChange.bind(this);
    this._onChangeDevice = this._onChangeDevice.bind(this);
  }

  componentDidMount() {
    ModuleStore.addChangeListener(this._onChange);
    DeviceStore.addChangeListener(this._onChangeDevice);
  }

  componentWillUnmount() {
    ModuleStore.removeChangeListener(this._onChange);
    DeviceStore.removeChangeListener(this._onChangeDevice);
  }

  _onChangeDevice() {
    let device = DeviceStore.getDevice();
    if (device) {
      ModuleActions.fetch(device.id, this.props.type);
    }
    else {
      this.setState({
        data: null
      });
    }
  }

  _onChange() {
    let obj = null;
    if (this.props.type == 'S') {
      obj = ModuleStore.getSound()
    }
    else if (this.props.type == 'L') {
      obj = ModuleStore.getLight()
    }
    this.setState({
      data: obj
    });
  }

  render() {
    let value = (this.state.data) ? this.state.data.value : '';

  	return (
      <div>
        Data:
        <p>{ value }</p>
      </div>
  	);
  }

}

Module.propTypes = {
  guid: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['L', 'S'])
}

export default Module;
