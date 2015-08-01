import React from 'react';
import Module from './Module';
import DeviceActions from '../actions/DeviceActions';
import DeviceStore from '../stores/DeviceStore';

class DeviceList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      selected: ''
    };
    this._handleComboChanged = this._handleComboChanged.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    DeviceStore.addChangeListener(this._onChange);
    DeviceActions.fetchAll();
  }

  componentWillUnmount() {
    DeviceStore.removeChangeListener(this._onChange);
  }

  _handleComboChanged(event) {
    let id = event.target.value;
    this.setState({
      selected: id
    })
    DeviceActions.fetch(id);
  }

  _onChange() {
    this.setState({
      devices: DeviceStore.getList()
    });
  }

  render() {
    let options = []
    options.push(<option value="">Select device</option>);

    for (let i = 0; i < this.state.devices.length; i++) {
      options.push(<option
        value={ this.state.devices[i].id }>
          { this.state.devices[i].name } ({ this.state.devices[i].model })
        </option>);
    }

  	return (
      <div>
        <select onChange={ this._handleComboChanged } id="deviceList" value={ this.state.selected }>
          { options }
        </select>
      </div>
  	);
  }

}

export default DeviceList;
