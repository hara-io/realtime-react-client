import React from 'react';
import constants from '../../configs/constants';
import ModuleActions from '../actions/ModuleActions';
import ModuleStore from '../stores/ModuleStore';
import { Paper, FlatButton } from 'material-ui';

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
    ModuleActions.fetch(this.props.device.id, this.props.type);
    ModuleStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ModuleStore.removeChangeListener(this._onChange);
  }

  _handleUpdateClick() {
    ModuleActions.fetch(this.props.device.id, this.props.type);
  }

  _onChange() {
    let obj = null;
    if (this.props.type == constants.module.sound.code) {
      obj = ModuleStore.getSound()
    }
    else if (this.props.type == constants.module.light.code) {
      obj = ModuleStore.getLight()
    }
    this.setState({
      data: obj,
      showModule: true
    });
  }

  render() {
    let value = (this.state.data) ? this.state.data.value : '';

    let title = {};
    let threshold = null;
    if (this.props.type == constants.module.sound.code) {
      title['classIcon'] = 'fa ' + constants.module.sound.icon;
      title['description'] = constants.module.sound.description;
      threshold = this.props.device.ConfigAmbientSound.threshold;
    }
    else {
      title['classIcon'] = 'fa ' + constants.module.light.icon;
      title['description'] = constants.module.light.description;
      threshold = this.props.device.ConfigAmbientLight.threshold;
    }

  	return (
      <div className="module-block">
        <Paper className="module-paper" zDepth={ 1 }>
          <div className="module-header">
            <h2>{ title.description }</h2>
            <span className={ title.classIcon }></span>
          </div>
          <div className="module-content">
            <span className="module-threshold">
              <b>Threshold</b> { threshold }
            </span>
            <span className="module-measure">
              { value }
            </span>
          </div>
          <div className="module-footer">
            <FlatButton primary={ true } onClick={ this._handleUpdateClick } label="Update" />
          </div>
        </Paper>
      </div>
  	);
  }

}

Module.propTypes = {
  device: React.PropTypes.object.isRequired,
  type: React.PropTypes.oneOf([constants.module.light.code, constants.module.sound.code])
}

export default Module;
