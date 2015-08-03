import React from 'react';
import ModuleActions from '../actions/ModuleActions';
import ModuleStore from '../stores/ModuleStore';
import { RaisedButton } from 'material-ui';

class Module extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      showModule: false
    };
    this._onChange = this._onChange.bind(this);
    this._handleUpdateClick = this._handleUpdateClick.bind(this);
  }

  componentDidMount() {
    ModuleActions.fetch(this.props.guid, this.props.type);
    ModuleStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ModuleStore.removeChangeListener(this._onChange);
  }

  _handleUpdateClick() {
    ModuleActions.fetch(this.props.guid, this.props.type);
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
      data: obj,
      showModule: true
    });
  }

  render() {
    let value = (this.state.data) ? this.state.data.value : '';

  	return (
      <div>
        <button className="mui-btn mui-btn-default">Button</button>
        <RaisedButton label="Update" secondary={true} onClick={ this._handleUpdateClick } />
        <p>Data: { value }</p>
      </div>
  	);
  }

}

Module.propTypes = {
  guid: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['L', 'S'])
}

export default Module;
